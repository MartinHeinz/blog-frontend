<template>
    <div>
        <h1>Blog Posts</h1>
        <p>
            This is a list of my recent blog posts/articles.
            You can also subscribe to my e-mail newsletter or RSS/Atom feed of my blog posts <router-link to="/subscribe">here.</router-link>
        </p>
        <span>
            <ul v-if="!postListEmpty" class="post-list">
                <PostListItem v-for="item in recentPostList"
                              v-bind:url="'/blog/'+ item.id"
                              v-bind:value="item.title"
                              v-bind:published="item.posted_on"
                              v-bind:key="item.id">
                </PostListItem>
            </ul>
            <p v-else>Coming soon...</p>
            <router-link to="/posts/" v-if="postListLength > 10">Show More Posts...</router-link>
        </span>
    </div>
</template>

<script>
import PostListItem from '@/components/PostListItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'PostList',
    components: { PostListItem },
    props: {
        items: Array,
    },
    created() {
        this.fetchPosts();
    },
    computed: {
        ...mapGetters([
            'postList', 'recentPostList',
        ]),
        postListEmpty() {
            return this.postList.length === 0;
        },
        postListLength() {
            return this.postList.length;
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
    @media (min-width: 480px) {
        .post-list .post-item {
            display: flex;
            margin-bottom: 5px;
        }
        .post-list .post-item .meta {
            text-align: left;
        }
    }
</style>
