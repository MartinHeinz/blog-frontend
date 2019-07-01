<template>
    <router-link :to="url">{{value}}</router-link>
</template>

<script>
export default {
    name: 'BaseMenuItem',
    props: {
        url: String,
        value: String,
    },
};
</script>

<style>

</style>
