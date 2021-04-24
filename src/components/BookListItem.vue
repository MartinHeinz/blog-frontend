<template>
    <a class="no-underline" :href="url">
        <img :src="src" :alt="alt" loading="lazy" height="195" width="130">
    </a>
</template>

<script>
export default {
    name: 'BookListItem',
    props: {
        src: String,
        url: String,
        alt: String,
    },
};
</script>

<style>
    img {
        padding: 10px;
    }
    .no-underline {
        background-image: none !important;
    }
</style>
