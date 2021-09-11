<script>
    import {create_booking} from "../api/booking";
    export default {
        name: 'Booking',
        // props: {
        //     restaurants: {
        //         type: Array,
        //         required: true
        //     }
        // },
        data() {
            return {
                restaurant: null,
                booking_name: null,
                booking_time: null,
                date: null,
                hour: null,
                minutes: null,
                number_of_guests: null,
                requests: null,
                mobile: null,
            }
        },
        methods: {
            async createBooking() {
                let result = await create_booking(this);
                if (result.response.status !== 200) {
                    console.log(result.response)
                }
                console.log(result.response);
            }
        }
    }
</script>

<template>
    <div class="card shadow pt-3 pb-5 mb-4">
        <div class="card-body">
            <form id="addBooking" method="post"
                  v-on:submit.prevent="createBooking">
                <div class="row">
                    <div class="offset-1 col-10">
                        <label>Restaurant</label>
                        <select class="form-control" name="restaurant"
                                v-model="restaurant" id="restaurant">
                            <option value="Test">Test</option>
                        </select>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="offset-1 col-5">
                        <label>Date</label>
                        <input type="date" class="form-control" id="date"
                               v-model="date" name="date"
                               min="2021-06-18">
                    </div>
                    <div class="col-5">
                        <label>Time</label>
                        <div class="row">
                            <div class="col-6">
                                <select class="d-inline form-control"
                                        v-model="hour" name="hour" id="hour">
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <select class="d-inline form-control"
                                        v-model="minutes"
                                        name="minutes" id="minutes">
                                    <option>00</option>
                                    <option>15</option>
                                    <option>30</option>
                                    <option>45</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="offset-1 col-10">
                        <label>Booking Name</label>
                        <input type="text" class="form-control" id="name"
                               name="name" v-model="booking_name">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="offset-1 col-10">
                        <label>Mobile Number</label>
                        <input type="text" class="form-control" id="mobile"
                               name="mobile" v-model="mobile">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="offset-1 col-10">
                        <label>Number of Guests</label>
                        <input class="form-control" type="number" min="1"
                               v-model="number_of_guests" max="10">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="offset-1 col-10">
                        <label>Special Requests</label>
                        <textarea class="form-control"
                                  v-model="requests"></textarea>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="offset-1 col-10">
                        <button class="w-100 btn btn-primary">Make
                            booking
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
