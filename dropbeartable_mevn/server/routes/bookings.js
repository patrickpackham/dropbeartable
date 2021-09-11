/* jshint esversion: 8 */
/* jshint node: true */

// imports
const express = require('express');
const controllers = require('/app/controllers/bookings.js');
const router = express.Router();

// set up endpoint routes
router.post('/bookings/create/', controllers.create_booking);
router.put('/bookings/update/:id', controllers.update_booking);
router.get('/bookings/', controllers.get_all_bookings);
router.get('/bookings/:id', controllers.get_booking);
router.delete('/bookings/delete/:id', controllers.delete_booking);


router.get('/notification/', controllers.send_notification);

module.exports = router;