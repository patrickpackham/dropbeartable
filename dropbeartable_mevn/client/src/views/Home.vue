<template>

    <!-- main content -->
    <div class="container-fluid">
        <div class="row mt-5 mb-4">
            <div class="offset-md-1 offset-sm-0 col-md-10 col-sm-12">
                <h1>Restaurant Administration</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-1"></div>
            <Restaurant v-for="restaurant in restaurants"
                        :key="restaurant._id"
                        :name="restaurant.name"
                        :image_path="restaurant.image_path"
                        :_id="restaurant._id"
            />
            <Restaurant/>
        </div>
    </div>
    <!-- end main content -->

</template>

<script>
    import Restaurant from '../components/Restaurant.vue';

    export default {
        name: 'Home',
        components: {
            Restaurant
        },
        computed: {
            restaurants() { return this.$store.state.restaurants}
        },
        mounted() {
            this.$store.dispatch('getAllRestaurants');
        }
    }
</script>
