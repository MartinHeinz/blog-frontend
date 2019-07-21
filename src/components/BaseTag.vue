<template>
    <router-link class="tag-link" :to="'/tags/' + url + '/'">{{name}}</router-link>
</template>

<script>
export default {
    name: 'BaseTag',
    props: {
        url: String,
        name: String,
    },
};
// TODO Use Vuex for tags (do get them from parent, but use Vuex right here).
</script>

<style>

    .tag-link {
        background-image: linear-gradient(transparent, transparent 10px, #d480aa 10px, #d480aa);
        background-position: bottom;
        background-size: 100% 6px;
        background-repeat: repeat-x;
    }
    .tag-link:before {
        content: " #";
    }
    .tag-link:after {
        content: ", ";
    }
    .tag-link:last-child:after {
        content: "";
    }

</style>
