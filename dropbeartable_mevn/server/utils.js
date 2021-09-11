/* jshint esversion: 8 */
/* utility functions and variables to help tidy up the rest of our codebase
*  and encourage the use of DRY principles. */

// imports
const mongoose = require('mongoose');
const config = require('/app/config.js');

const connectToDB = () => {
    // Try and connect to our database. Log any errors if we can't.
    const mongoDbUrl =
        'mongodb://' +
        config.MONGO_USERNAME + ':' +
        config.MONGO_PASSWORD + '@' +
        config.MONGO_IP + ':' + config.MONGO_PORT;
    mongoose.connect(mongoDbUrl,
                    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.error( err ));
    mongoose.set('useFindAndModify', false);
};

const processValidationErrors = (error_dict) => {
    // given an error dictionary from mongoose return a nicely formatted json rep.
    const errors = {};
    if (error_dict.name === "ValidationError") {
        Object.keys(error_dict.errors).forEach((key) => {
            errors[key] = error_dict.errors[key].message;
        });
    } else { errors.generalError = error_dict; }
    return errors;
};

const setAPIResponseHeadersMiddleware = (req, res, next) => {
    // Add any headers you want here for the API responses.
     res.setHeader('Cache-Control', 'no-cache');
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
     res.setHeader('Content-Type', 'application/json');
     next();
};


// error messages that we use more than once throughout our app.
const badIDMessage = "ID Argument passed in must be a single String " +
                     "of 12 bytes or a string of 24 hex characters";
const notFoundMessage = "Resource not found! A resource with that ID " +
                        "was not found on the server";
const unexpectedMessage = "Something unexpected has gone wrong, " +
                          "please try again later.";

module.exports = {processValidationErrors, connectToDB,
                  setAPIResponseHeadersMiddleware,
                  badIDMessage, notFoundMessage, unexpectedMessage};