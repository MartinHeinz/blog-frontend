<template>
    <div id="app">
        <Navigation
            :items="[
            {value: 'Home', url: '/'},
            {value: 'Contact', url: '/contact'},
            {value: 'About', url: '/about'}]"
            :actions="{
            url_previous: '/blog/' + previous,
            url_next: '/blog/' + next,
                }">
        </Navigation>
        <div class="content">
            <PostHeader :title="this.header.title"
                        :author="this.header.author"
                        :published="this.header.published"
                        :tags="this.tags">
            </PostHeader>
            <Post :text="this.text"/>
            <BaseFooter :items="[
                {value: 'Home', url: '/'},
                {value: 'Contact', url: '/contact'},
                {value: 'About', url: '/about'}]">
            </BaseFooter>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';
import PostHeader from './PostHeader.vue';
import Post from './Post.vue';
import BaseFooter from './BaseFooter.vue';
import axios from 'axios';
import { API_URL } from '@/common/config';

export default {
    name: 'Blog',
    components: {
        Navigation,
        PostHeader,
        Post,
        BaseFooter,
    },
    props: {
        text: String,
        header: Object,
        tags: Object,
        previous: Number,
        next: Number,
    },
    mounted() {
        axios
            .get(`${API_URL}posts/${this.$route.params.id}`)
            .then((response) => {
                this.text = response.data.text;
                this.header = {
                    title: response.data.title,
                    author: response.data.author,
                    published: response.data.posted_on,
                };
                this.tags = response.data.tags;
                this.previous = response.data.previous_post_id;
                this.next = response.data.next_post_id;
            });
    },
};
</script>

<style>
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        overflow-wrap: break-word;
        padding-top: 4rem;
        padding-bottom: 4rem;
        box-sizing: border-box;
    }
</style>
