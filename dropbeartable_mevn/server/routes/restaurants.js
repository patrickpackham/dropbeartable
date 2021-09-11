/* jshint esversion: 8 */
/* jshint node: true */

// imports
const express = require('express');
const controllers = require('/app/controllers/restaurants.js');
const router = express.Router();

router.get('/restaurants/', controllers.get_all_restaurants);
router.get('/restaurants/:id/', controllers.get_restaurant_name);
router.post('/restaurants/create/', controllers.create_restaurant);

module.exports = router;
