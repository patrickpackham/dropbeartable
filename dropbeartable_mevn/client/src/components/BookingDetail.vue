<script>
    export default {
        name: 'BookingDetail',
        props: {
            _id: {
                type: String,
                required: true
            },
            restaurant_name: {
                type: String,
                required: true
            },
            datetime: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            mobile: {
                type: String,
                required: true
            },
            number_of_guests: {
                type: Number,
                required: true
            },
            requests: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                required: true
            }
        }
    }
</script>

<template>
    <div class="row">
        <div class="offset-3 col-6">
            <div class="card shadow pt-3 pb-5 mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="offset-1 col-5">
                            <p>Restaurant</p>
                        </div>
                        <div class="col-5">
                            <p>{{ restaurant_name }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-1 col-5">
                            <p>Booking Time</p>
                        </div>
                        <div class="col-5">
                            <p>{{ datetime }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-1 col-5">
                            <p>Booking Name</p>
                        </div>
                        <div class="col-5">
                            <p>{{ name }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-1 col-5">
                            <p>Mobile Number</p>
                        </div>
                        <div class="col-5">
                            <p>{{ mobile }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-1 col-5">
                            <p>Number of Guests</p>
                        </div>
                        <div class="col-5">
                            <p>{{ number_of_guests }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-1 col-5">
                            <p>Special Requests</p>
                        </div>
                        <div class="col-5">
                            <p>{{ requests }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-1 col-5">
                            <p>Status</p>
                        </div>
                        <div class="col-5">
                            <p>{{ status }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
