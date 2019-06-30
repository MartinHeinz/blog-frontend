<template>
    <div id="app">
        <Navigation
            :items="[
            {value: 'Home', url: '/home'},
            {value: 'Contact', url: '/contact'},
            {value: 'About', url: '/about'}]"
            :actions="{
            url_previous: 'url_previous_test',
            url_next: 'url_previous_test',
                }">
        </Navigation>
        <div class="content">
            <PostHeader title="This is title"
                        author="Martin"
                        published="05-05-2019 17:43"
                        :tags="[
                            {name: 'Golang', url: 'go'},
                            {name: 'Vue.js', url: 'vue'}
                        ]">
            </PostHeader>
            <Post text="Body of post"/>
            <BaseFooter :items="[
                {value: 'Home', url: '/home'},
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

export default {
    name: 'Blog',
    components: {
        Navigation,
        PostHeader,
        Post,
        BaseFooter,
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
