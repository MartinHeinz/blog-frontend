<template>
    <article class="post" itemscope="" itemtype="http://schema.org/BlogPosting">

        <div class="content" itemprop="articleBody">
            <p>{{ text }}</p>
            <span>
                When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are
                $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
            </span>
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
    mounted() {
        axios
            .get(`${API_URL}posts/${this.$route.params.id}`) // TODO Move this call to Blog.vue, so I don't need to call it twice (here and in PostHeader)
            .then((response) => {
                this.text = response.data.text;
            });
    },
};
</script>

<style>

    span {}

</style>
