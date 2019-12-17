<template>
    <div id="app">
        <Navigation
            :items="[
            {value: 'Home', url: '/'},
            {value: 'Contact', url: '/contact'},
            {value: 'Subscribe', url: '/subscribe'}]">
        </Navigation>
        <div class="content">
            <PostHeader>
            </PostHeader>
            <Post/>
            <BaseFooter :items="[
                {value: 'Home', url: '/'},
                {value: 'Contact', url: '/contact'},
                {value: 'Subscribe', url: '/subscribe'}]">
            </BaseFooter>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import PostHeader from '@/components/PostHeader.vue';
import Post from '@/components/Post.vue';
import BaseFooter from '@/components/BaseFooter.vue';

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
        padding-top: 2rem;
        padding-bottom: 4rem;
        box-sizing: border-box;
    }
</style>
