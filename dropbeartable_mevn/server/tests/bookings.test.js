const mongoose = require('mongoose');
const models = require('/app/models');
const utils = require('/app/utils');
jest.useFakeTimers();


test('Validation test, if we try and book a reservation before the' +
    ' restaurant is open our error handler should neatly display that.', () => {
    try {
         const restaurant = new models.Restaurant({
            opening_time: "01/01/2020 09:30",
            closing_time: "01/01/2020 19:00",
            total_seats: 10
        });
        restaurant.save();
        const booking = new models.Booking({
                name: "Test Booking",
                number_of_guests: 1,
                datetime: new Date("02/02/2020 06:00"),
                mobile: "1234567890",
                requests: "Booth please.",
                restaurant_id: restaurant._id
            });
        booking.save();
    } catch (error) {
        const errors = utils.processValidationErrors(error);
        expect(errors.datetime).toEqual("Sorry, the restaurant is closed at this time.")
    }
});