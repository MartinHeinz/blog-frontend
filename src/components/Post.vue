<template>
    <article>
        <div class="content">
            <component :is="currentPostText"></component>
        </div>
    </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Post',
    watch: {
        '$route.params.id': () => {
            this.fetchPostById({ id: this.$route.params.id });
        },
    },
    mounted() {
        this.fetchPostById({ id: this.$route.params.id });
    },
    computed: {
        ...mapGetters([
            'currentPostText',
            'currentPostLDJson',
        ]),
    },
    methods: {
        ...mapActions([
            'fetchPostById',
        ]),
    },
    metaInfo() {
        return this.currentPostLDJson;
    },
};
</script>

<style>

    span {}

</style>
