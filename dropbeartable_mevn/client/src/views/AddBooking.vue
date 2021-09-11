<template>
<!-- main content -->
<div class="container-fluid">
    <div class="row mt-5">
        <div class=" offset-3 col-6">
            <h1>Make a Reservation</h1>
        </div>
    </div>
    <div class="row">
        <div class="offset-3 col-6">
            <BookingForm></BookingForm>
        </div>
    </div>
</div>
<!-- end main content -->
    <!-- begin toasts -->
<div aria-live="polite" aria-atomic="true" style="min-height: 200px;">
    <div id="addSuccess" class="success toast" style="position: absolute; top: 2%; right: 0;">
        <div class="toast-header">
            <strong class="w-100">You have successfully add a new booking!</strong>
            <span aria-hidden="true" class="ml-auto mb-1 close"
                  aria-label="Close">&times;</span>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'AddBooking',
        components: {
            BookingForm
        }
    }
    import BookingForm from '../components/BookingForm.vue';
</script>