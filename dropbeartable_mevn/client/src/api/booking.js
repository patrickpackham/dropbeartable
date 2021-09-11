/* jshint esversion: 8 */
/* jshint node: true */

import axios from 'axios';

// send a POST request
export async function create_booking(data) {
    let returnValue = null;
    const form = {
        'name': data.booking_name,
        'number_of_guests': data.number_of_guests,
        'mobile': data.mobile,
        'requests': data.requests,
        'restaurant_id': '613c1e64d5d7b4003c6da657',
        'status': 'Processing',
        'datetime': data.date + ' ' + data.hour + ':' + data.minutes
    };
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/bookings/create/',
        data: form,
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => { returnValue = response; })
    .catch(err => { returnValue = err; });
    return returnValue;
}

export async function get_bookings() {
    let returnValue = null;
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/bookings/',
        headers: {'Content-Type': 'application/json'}
    })
    .then((response) => { returnValue = response; })
    .catch(err => { returnValue = err ;});
    return returnValue;

}



