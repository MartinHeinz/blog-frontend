<template>
    <div class="content">
        <div class="row">
            <About></About>
            <PostList :items="this.posts"></PostList>
        </div>
        <BookList :items="this.books">
        </BookList>
        <BaseFooter :items="[
                {value: 'Home', url: '/'},
                {value: 'Contact', url: '/contact'},
                {value: 'About', url: '/about'}]">
        </BaseFooter>
    </div>
</template>

<script>
import axios from 'axios';
import BaseFooter from './BaseFooter.vue';
import About from './About.vue';
import BookList from './BookList.vue';
import PostList from './PostList.vue';
import { API_URL } from '@/common/config';

export default {
    name: 'Home',
    props: {
        books: Array,
        posts: Array,
    },
    components: {
        About,
        PostList,
        BaseFooter,
        BookList,
    },
    mounted() {
        let self = this;
        axios.all([this.getBooks(), this.getPosts()])
            .then(axios.spread((books, posts) => {
                self.books = books.data.books;
                self.posts = posts.data.posts;
            }));
    },
    methods: {
        getBooks() {
            return axios.get(`${API_URL}books/`);
        },

        getPosts() {
            return axios.get(`${API_URL}posts/`);
        },
    },
};
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    /* Create two equal columns that floats next to each other */
    .column {
        float: left;
        width: 50%;
        padding: 10px;
        height: 50%;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    @media screen and (max-width: 600px) {
        .column {
            text-align: center;
            width: 100%;
        }
    }
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
