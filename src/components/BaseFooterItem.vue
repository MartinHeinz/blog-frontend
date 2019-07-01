<template>
    <li><router-link :to="url">{{value}}</router-link></li>
</template>

<script>
export default {
    name: 'BaseFooterItem',
    props: {
        url: String,
        value: String,
    },
};
</script>

<style>

</style>
