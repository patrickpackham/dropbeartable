<script>
    export default {
        name: 'Booking',
        props: {
            restaurant_name: {
                type: String,
                required: true
            },
            booking_name: {
                type: String,
                required: true,
            },
            booking_time: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        }
    }
</script>

<template>
    <div class="col-md-2 col-sm-12">
        <router-link v-bind:to="'/bookings/' +  id ">
        <div class="card shadow">
            <div class="card-body">
                <p>
                    {{ restaurant_name }}<br>
                    {{ booking_name }}<br>
                    {{ booking_time }}</p>
            </div>
        </div>
        </router-link>
    </div>
</template>