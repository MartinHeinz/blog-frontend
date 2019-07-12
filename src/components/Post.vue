<template>
    <article class="post" itemscope="" itemtype="http://schema.org/BlogPosting">

        <div class="content" itemprop="articleBody">
            <p>{{ text }}</p>
        </div>
    </article>
</template>

<script>
import axios from 'axios';
import { API_URL } from '@/common/config';

export default {
    name: 'Post',
    props: {
        text: String,
    },
    watch: {
        $route: 'updateContent',
    },
    methods: {
        updateContent() {
            axios
                .get(`${API_URL}posts/${this.$route.params.id}`)
                .then((response) => {
                    this.text = response.data.text;
                });
        },
    },
};
</script>

<style>

    span {}

</style>
