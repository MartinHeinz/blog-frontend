<template>
    <li class="post-item">
        <div class="meta"><time :datetime="published | formatDate" itemprop="datePublished">{{published}}</time></div>
        <span>
            <a :href="url"> {{ value }}</a>
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
