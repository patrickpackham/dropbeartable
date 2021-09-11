/* jshint esversion: 8 */
/* jshint node: true */

import axios from 'axios';

export async function get_restaurants() {
    const returnValue = await axios({
        method: 'get',
        url: 'http://localhost:3000/api/restaurants/',
    })
    .then((response) => { return response.data; })
    .catch(err => { return err; });
    return returnValue;
}

