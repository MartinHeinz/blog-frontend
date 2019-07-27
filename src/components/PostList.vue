<template>
    <div>
        <h1>Blog Posts</h1>
        <span>
            <ul v-if="postEmpty" class="post-list">
                <PostListItem v-for="item in postList"
                              v-bind:url="'/blog/'+ item.id"
                              v-bind:value="item.title"
                              v-bind:published="item.posted_on"
                              v-bind:key="item.id">
                </PostListItem>
            </ul>
            <p v-else>Coming soon...</p>
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
            'postList',
        ]),
        postEmpty() {
            return this.postList.length > 0;
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
