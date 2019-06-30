<template>
    <div class="column">
        <h1>Blog Posts</h1>
        <span>
            <ul class="post-list">
                <PostListItem v-for="item in items"
                              v-bind:url="item.url"
                              v-bind:value="item.value"
                              v-bind:published="item.published"
                              v-bind:key="item.id">
                </PostListItem>
            </ul>
        </span>
    </div>
</template>

<script>
import PostListItem from './PostListItem.vue';

export default {
    name: 'PostList',
    components: { PostListItem },
    props: {
        items: Array,
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
