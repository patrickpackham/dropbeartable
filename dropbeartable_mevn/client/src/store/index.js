/* jshint esversion: 8 */
/* jshint node: true */

import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    'restaurants':  [],
    'bookings': []
  },
  mutations: {
    getAllRestaurants:  (state, restaurants) => {
      state.restaurants = restaurants;
    },
    getAllBookings: (state, bookings) => {
      state.bookings = bookings;
    }
  },
  actions: {
    getAllRestaurants ({commit}) {
      axios({
          method: 'get',
          url: 'http://localhost:3000/api/restaurants/',
      })
      .then(response => commit('getAllRestaurants', response.data));
      },
    getAllBookings({commit}) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/api/bookings/',
      })
      .then(response => commit('getAllBookings', response.data));
    }
  },
  modules: {
  },
  getters: {
  }
});
