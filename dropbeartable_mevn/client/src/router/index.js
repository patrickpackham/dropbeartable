import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookings',
    name: 'Bookings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Bookings.vue')
  },
  {
    path: '/new/',
    name: 'AddBooking',
    component: () => import('../views/AddBooking')
  },
  {
    path: '/bookings/:id',
    name: 'Booking',
    component: () => import('../views/BookingDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
