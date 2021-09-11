<!-- main content -->
<template>
<div class="container-fluid">
    <div class="row mt-5">
        <div class=" offset-3 col-4">
            <h1>Reservation</h1>
        </div>
        <div class="col-1">
            <button class="btn btn-secondary w-100">Delete</button>
        </div>
        <div class="col-1">
            <a href="edit_booking.html"><button class="btn btn-primary w-100">Edit</button></a>
        </div>
    </div>
    <Booking
        :_id="booking._id"
        :name="booking.name"
        :datetime="booking.datetime"
        :restaurant_name="booking.restaurant_name"
        :mobile="booking.mobile"
        :number_of_guests="booking.number_of_guests"
        :requests="booking.requests"
        :status="booking.status"/>
    <Booking/>
</div>
</template>
<!-- end main content -->

<script>
    export default {
        name: 'BookingDetail',
        components: {
            Booking
        },
        data() {
            return { booking: null }
        },
        created() {
            fetch('http://localhost:3000/api/bookings/' + this.$route.params.id)
            .then(res => res.json())
            .then(data => {
                this.booking = data;
                fetch('http://localhost:3000/api/restaurants/' + this.booking.restaurant_id + '/')
                .then(res => res.json())
                .then(data => this.booking.restaurant_name = data.name)
            })
            .catch(err => console.log(err))
        }
    }
    import Booking from '../components/BookingDetail.vue'
</script>