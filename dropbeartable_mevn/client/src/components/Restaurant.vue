<script>
    export default {
        name: 'Restaurant',
        props: {
            name: {
                type: String,
                required: true
            },
            _id: {
                type: String,
                required: true
            },
            image_path: {
                type: String,
                required: true
            },
            restaurant_name: {
                type: String,
                required: true
            }
        },
        methods: {
            setRestaurant() {
                this.$store.dispatch('setRestaurant', this.id);
            }
        }

    }
</script>

<template>
    <div class="col-md-5 col-sm-12">
        <router-link v-bind:to="/restaurants/ + _id">
        <div class="card shadow pt-3 pb-5 mb-4" v-on:click="setRestaurant">
            <div class="card-body text-center">
                <h2>{{ name }}</h2>
                <img :src="image_path" class="preview-img">
            </div>
        </div>
        </router-link>
    </div>
</template>