<template>
    <article class="post" itemscope="" itemtype="http://schema.org/BlogPosting">

        <div class="content" itemprop="articleBody">
            <p>{{ currentPostText }}</p>
        </div>
    </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Post',
    watch: {
        '$route.params.id': function () {
            this.fetchPostById({ id: this.$route.params.id });
        },
    },
    mounted() {
        this.fetchPostById({ id: this.$route.params.id });
    },
    computed: {
        ...mapGetters([
            'currentPostText',
        ]),
    },
    methods: {
        ...mapActions([
            'fetchPostById',
        ]),
    },
};
</script>

<style>

    span {}

</style>
