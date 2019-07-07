<template>
    <div class="content">
        <div class="row">
            <About></About>
            <PostList :items="[
            {value: 'Gentle Intro to Attribute Based Encryption', url: '/blog/1', published: '05-05-2019'},
            {value: 'Gentle Intro to Order Preserving Encryption', url: '/blog/2', published: '05-05-2019'},
            {value: 'Pytest Tips and Tricks', url: '/blog/3', published: '05-05-2019'}]"></PostList>
        </div>
        <BookList :items="this.books">
        </BookList>
        <BaseFooter :items="[
                {value: 'Home', url: '/home'},
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

export default {
    name: 'Home',
    props: {
        books: Array,
    },
    components: {
        About,
        PostList,
        BaseFooter,
        BookList,
    },
    mounted() {
        axios
            .get('http://localhost:1234/api/v1/books/')
            .then((response) => { (this.books = response.data.books); });
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
