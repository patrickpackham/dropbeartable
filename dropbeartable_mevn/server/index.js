/* jshint esversion: 8 */
/* jshint node: true */

// imports
const cors = require('cors');
const express = require('express');
const utils = require('/app/utils.js');
const booking_router = require('/app/routes/bookings.js');
const restaurant_router = require('/app/routes/restaurants.js');

// app set up.
const app = express();
const port = process.env.PORT || 3000;

// connect to the database.
utils.connectToDB();

app.options('*', cors()); // include before other routes
app.use(cors());
app.use(express.json());
app.use('/api', booking_router);
app.use('/api', restaurant_router);

// signal the app has started correctly.
app.listen(port, () => console.log(`Express is listening on port ${port}!`));

