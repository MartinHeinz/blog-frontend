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
import BaseFooter from '@/components/BaseFooter.vue';
import About from '@/components/About.vue';
import BookList from '@/components/BookList.vue';
import PostList from '@/components/PostList.vue';
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
        this.populateFields();
    },
    methods: {
        getBooks() {
            return axios.get(`${API_URL}books/`);
        },

        getPosts() {
            return axios.get(`${API_URL}posts/`);
        },
        populateFields() {
            const self = this;
            return axios.all([this.getBooks(), this.getPosts()])
                .then(axios.spread((books, posts) => {
                    self.books = books.data.books;
                    self.posts = posts.data.posts;
                }));
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
