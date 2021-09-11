/* jshint esversion: 8 */
/* jshint node: true */

const models = require('/app/models/restaurant.js');
const utils = require('/app/utils');

exports.get_all_restaurants = (req, res) => {
    // return all booking objects in the database.
    const restaurant_query = models.Restaurant.find().select(
        'name image_path'
    );
    restaurant_query.exec((error, restaurants) => {
        if (error) {
            res.status(500).json({message: utils.unexpectedMessage});
        }
        res.status(200).json(restaurants);
    });
};

exports.get_restaurant_name = (req, res) => {
    // return a specific restaurant by id.
    const restaurant_query = models.Restaurant.findById(req.params.id).select(
        'name'
    );
    restaurant_query.exec((error, restaurant) => {
        if (error) {
            res.status(500).json({message: utils.unexpectedMessage});
        }
        res.status(200).json(restaurant);
    });
};

exports.create_restaurant = async (req, res) => {
    const restaurant = new models.Restaurant({
        name: req.query.name,
        total_seats: req.query.total_seats,
        open_time: new Date('2000-1-1-' + ' ' + req.query.open_time),
        close_time: new Date('2000-1-1-' + ' ' + req.query.close_time),
        image_path: req.query.image_path
    });
    console.log(restaurant);
    await restaurant.save();
};