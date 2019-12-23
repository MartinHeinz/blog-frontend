<template>
    <div class="content">
        <h1>Blog Posts</h1>
        <span>
            <ul v-if="!postListEmpty" class="post-list">
                <PostListItem v-for="item in postList"
                              v-bind:url="'/blog/'+ item.id"
                              v-bind:value="item.title"
                              v-bind:published="item.posted_on"
                              v-bind:key="item.id">
                </PostListItem>
            </ul>
            <p v-else>Coming soon...</p>
        </span>
        <BaseFooter :items="[
                {value: 'Home', url: '/'},
                {value: 'Contact', url: '/contact'},
                {value: 'Subscribe', url: '/subscribe'}]">
        </BaseFooter>
    </div>

</template>

<script>
import PostListItem from '@/components/PostListItem.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'PostListPage',
    components: { PostListItem, BaseFooter },
    props: {
        items: Array,
    },
    created() {
        this.fetchPosts();
    },
    computed: {
        ...mapGetters([
            'postList',
        ]),
        postListEmpty() {
            return this.postList.length === 0;
        },
    },
    methods: {
        ...mapActions([
            'fetchPosts',
        ]),
    },
};
</script>

<style scoped>

</style>
