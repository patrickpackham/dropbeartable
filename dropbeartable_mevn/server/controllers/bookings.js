/* jshint esversion: 8 */
/* jshint node: true */

const models = require('/app/models/booking.js');
const restaurant_model = require('/app/models/restaurant.js');
const utils = require('/app/utils');

const clients = [];
const sendNotification = (newBooking) => {
    clients.forEach(client => client.res.write(
        `event: bookingAdded\ndata:'
        ${JSON.stringify(newBooking)}\n\n`)
    );
};

exports.create_booking = async (req, res) => {
    try {
        console.log(req.body);
        // Try and create the booking.
        const booking = new models.Booking({
            name: req.body.name,
            number_of_guests: req.body.number_of_guests,
            datetime: new Date(req.body.datetime),
            mobile: req.body.mobile,
            requests: req.body.requests,
            restaurant_id: req.body.restaurant_id,
            status: 'Processing'
        });
        await booking.save();
        res.status(201).json(booking);
        return sendNotification(booking);
    } catch (error) {
        console.log(error);
        res.status(400).json(utils.processValidationErrors(error));
    }
};

exports.update_booking = (req, res) => {
    // try and update the booking object given new details and an id.
    models.Booking.findById(req.params.id).exec(async (error, booking) => {
        if (!booking && !error) {
            res.status(404).json({message: utils.notFoundMessage});
        } else if (error && error.name === "CastError") {
            res.status(400).json({message: utils.badIDMessage});
        } else if (error) {
            res.status(500).json({message: utils.unexpectedMessage});
        }
        booking.name = req.query.name;
        booking.number_of_guests = req.query.number_of_guests;
        booking.datetime = new Date(req.query.date + ' ' + req.query.time);
        booking.mobile = req.query.mobile;
        booking.requests = req.query.requests;
        booking.restaurant_id = req.query.restaurant_id;
        try {
            await booking.save();
            res.status(200).json(booking);
        } catch (error_dict) {
            console.log(error_dict);
            res.status(400).json(utils.processValidationErrors(error_dict));
        }
    });
};

exports.get_all_bookings = (req, res) => {
    // create a query to get all booking objects in the database.
    const booking_query = models.Booking.find().select(
        'name number_of_guests datetime mobile requests restaurant_id'
    );
    // execute the booking query
    booking_query.exec((error, bookings) => {
        if (error) {
            // return any errors if the query fails.
            res.status(500).json({message: utils.unexpectedMessage});
        }
        // return the list of bookings with a success status code.
        res.status(200).json(bookings);

    });
};

exports.get_booking = (req, res) => {
    // return a specific booking given an id.
    const booking_query = models.Booking.findById(req.params.id).select(
        '_id name number_of_guests datetime mobile requests restaurant_id status'
    );
    booking_query.exec((error, booking) => {
        if (!booking && !error) {
            res.status(404).json({message: utils.notFoundMessage});
        } else if (error && error.name === "CastError") {
            res.status(400).json({message: utils.badIDMessage});
        } else if (error) {
            res.status(500).json({message: utils.unexpectedMessage});
        }
        res.status(200).json(booking);
    });
};

exports.delete_booking = (req, res) => {
    models.Booking.findByIdAndDelete(req.params.id, (error, booking) => {
        if (error && error.name === "CastError") {
            res.status(400).json({message: utils.badIDMessage});
        } else if (error) {
            res.status(500).json({message: utils.unexpectedMessage});
        } else if (!booking) {
            res.status(404).json({message: utils.notFoundMessage});
        }
        return res.status(204).json();
    });
};

exports.send_notification = (req, res) => {
    res.setHeader('Access-Control-Allow_origin', 'http://localhost:8080');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Content-Type', 'text/event-stream');
    const clientID = Date.now();
    const newClient = {
        id: clientID,
        res
    };
    clients.push(newClient);
    res.on('close', () => console.log('connection closed'));
};