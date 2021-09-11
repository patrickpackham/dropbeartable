/* jshint esversion: 8 */
/* jshint node: true */

// imports
const mongoose = require('mongoose');
// const utils = require('/app/utils');
const Schema = mongoose.Schema;

// database representation of a restaurant.
const restaurantSchema = new Schema({
    name: {type: String},
    total_seats: {type: Number},
    open_time: {type: Date},
    close_time: {type: Date},
    image_path: {type: String},
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports.Restaurant = Restaurant;
