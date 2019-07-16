<template>
    <li class="post-item">
        <div class="meta"><time :datetime="published" itemprop="datePublished">{{ published | formatDate }}</time></div>
        <span>
            <router-link :to="url">{{value}}</router-link>
        </span>
    </li>
</template>

<script>
export default {
    name: 'PostListItem',
    props: {
        published: String,
        url: String,
        value: String,
    },
};
</script>

<style>
    .post-list .post-item .meta {
        display: block;
        margin-right: 16px;
        min-width: 100px;
        color: #666;
        font-size: 14px;
    }
</style>
