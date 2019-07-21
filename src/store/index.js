import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_URL } from '@/common/config';

Vue.use(Vuex);

const types = {
    SET_BOOKS: 'SET_BOOKS',
    SET_POSTS: 'SET_POSTS',
    SET_CURRENT_POST: 'SET_CURRENT_POST',
};

const state = {
    books: Object,
    posts: Object,
    currentPost: Object,
};

const getters = {
    bookList(state) {
        return state.books;
    },
    postList(state) {
        return state.posts;
    },
    currentPost(state) {
        return state.currentPost;
    },
    currentPostText(state) {
        return state.currentPost.text;
    },
    currentPostHeader(state) {
        return {
            title: state.currentPost.title,
            author: state.currentPost.author,
            published: state.currentPost.posted_on,
            tags: state.currentPost.tags,
        };
    },
    previousPostId(state) {
        return state.currentPost.previous_post_id;
    },
    nextPostId(state) {
        return state.currentPost.next_post_id;
    },
};

const actions = {
    fetchBooks({ commit }) {
        return axios.get(`${API_URL}books/`)
            .then(r => r.data.books)
            .then((books) => {
                commit(types.SET_BOOKS, books);
            });
    },
    fetchPosts({ commit }) {
        return axios.get(`${API_URL}posts/`)
            .then(r => r.data.posts)
            .then((posts) => {
                commit(types.SET_POSTS, posts);
            });
    },
    fetchPostById({ commit }, payload) {
        return axios.get(`${API_URL}posts/${payload.id}`)
            .then(r => r.data)
            .then((data) => {
                commit(types.SET_CURRENT_POST, data);
            });
    },
};

const mutations = {
    [types.SET_BOOKS](state, books) {
        state.books = books;
    },
    [types.SET_POSTS](state, posts) {
        state.posts = posts;
    },
    [types.SET_CURRENT_POST](state, post) {
        state.currentPost = post;
    },
};

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});

export default store;
