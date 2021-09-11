/* jshint esversion: 8 */
/* jshint node: true */

// imports
const mongoose = require('mongoose');
const Restaurant = require('/app/models/restaurant.js');
const Schema = mongoose.Schema;

// database representation of a reservation.
const bookingSchema = new Schema({
    restaurant_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    datetime: {type: Date, required: true},
    name: {type: String, required: true},
    status: {type: String, required: true},
    mobile: {type: String, required: true},
    requests: {type: String, required: false},
    number_of_guests: {type: Number, required: true},
});

// validation for our booking model.
bookingSchema.pre('validate', async function (next) {
    // get the restaurant details.
    let restaurantDetails = {};
    try {
        console.log(this.restaurant_id);
      restaurantDetails = await Restaurant.Restaurant.findById(
        this.restaurant_id).select(
        '_id total_seats open_time close_time').exec();
    } catch (error) {
        this.invalidate("restaurant_id", "This is not a valid restaurant ID.");
        return;
    }
    console.log(restaurantDetails);

    // determine if there are enough seats for this session time.
    if (this.number_of_guests > restaurantDetails.total_seats) {
        this.invalidate("number_of_guests",
                       "Sorry, there are not enough seats " +
                       "in this session for your reservation.");
    }

    const filter = {
        datetime: {$eq: this.datetime},
        restaurant_id: {$eq: this.restaurant_id},
        _id: {$ne: this._id}
    };
    const totalSeats = restaurantDetails.total_seats;
    const takenSeats = await Booking.aggregate([
        {$match: filter},
        {
            $group: {
                _id: '$number_of_guests',
                count: {$sum: '$number_of_guests'}
            }
        }
    ]);
    if (takenSeats.length > 0) {
        const availableSeats = totalSeats - takenSeats[0].count;
        // raise an error if there isn't.
        if (this.number_of_guests > availableSeats) {
            this.invalidate("number_of_guests",
                "Sorry, there are not enough seats " +
                "in this session for your reservation.");
        }
    }

    // Validate session time.
    if (this.datetime.getMinutes() % 30 !== 0) {
        this.invalidate("datetime",
            "Sorry, that's an invalid session time. " +
            "Session times must be at thirty minute " +
            "intervals from the opening time.");
    }

    // Ensure the restaurant is open at this session time.
    const openMinutes = restaurantDetails.open_time.getHours() * 60 +
        restaurantDetails.open_time.getMinutes();
    const closeMinutes = restaurantDetails.close_time.getHours() * 60 +
        restaurantDetails.close_time.getMinutes();
    const bookingMinutes = this.datetime.getHours() * 60 +
        this.datetime.getMinutes();


    if (bookingMinutes < openMinutes || closeMinutes < bookingMinutes) {
        this.invalidate("datetime", "Sorry, the restaurant is " +
            "closed at this time.");
    }
    next();
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports.Booking = Booking;
