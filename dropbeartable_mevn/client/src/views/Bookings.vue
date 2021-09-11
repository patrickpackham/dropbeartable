<template>
<!-- main content -->
<div class="container-fluid">

    <div class="row mt-5">
        <div class="offset-md-1 offset-sm-0 col-sm-12 col-md-9">
            <h1>All Bookings</h1>
        </div>
        <div class="col-md-1 col-sm-12">
            <a href="add_booking.html">
                <button type="button" class="btn btn-primary w-100">New
                </button>
            </a>
        </div>
    </div>
    <!-- date component -->
    <div class="row mt-3">
        <div class="offset-sm-0 col-md-10 offset-md-1 col-sm-12">
            <h2></h2>
        </div>
    </div>
    <!-- end date component -->
    <div class="row">
        <div class="col-1"></div>
        <!-- booking component-->
        <Booking v-for="booking in bookings"
                    :key="booking._id"
                    :id="booking._id"
                    :restaurant_name="booking.restaurant_name"
                    :booking_name="booking.name"
                    :booking_time="booking.datetime"/>
        <Booking/>
        <!-- end booking component -->
    </div>

</div>
</template>

<script>
    export default {
        name: 'Bookings',
        components: {
            Booking
        },
        computed: {
            bookings() { return this.$store.state.bookings }
        },
        mounted() {
            this.$store.dispatch('getAllBookings');
        }
        // created() {
        //     fetch('http://localhost:3000/api/bookings/')
        //         .then(res => res.json())
        //         .then(data => {
        //             this.bookings = data;
        //             for (const booking of this.bookings) {
        //                 // add the restaurant name to the booking object
        //                 fetch('http://localhost:3000/api/restaurants/' + booking.restaurant_id + '/')
        //                 .then(res => res.json())
        //                 .then(data => booking.restaurant_name = data.name);
        //
        //                 // get the right pieces of our datetime string
        //                 let hours = new Date(booking.datetime).getHours();
        //                 let minutes = new Date(booking.datetime).getMinutes();
        //                 hours = (hours < 10 ? "0" : "") + hours;
        //                 minutes = (minutes < 10 ? "0" : "") + minutes;
        //                 if (hours > 12) { hours = hours - 12; var pm = true}
        //
        //                 // Compose the string for display
        //                 let currentTimeString = hours + ":" + minutes;
        //                 if (pm) currentTimeString += " PM";
        //                 else currentTimeString += " AM";
        //                 booking.datetime = currentTimeString;
        //             }
        //         })
        //         .catch(err => console.log(err))
        // }
    }
    import Booking from '../components/Booking.vue';
</script>

