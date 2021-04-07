import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_URL } from '@/common/config';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

Vue.use(Vuex);

const types = {
    SET_BOOKS: 'SET_BOOKS',
    SET_PROJECTS: 'SET_PROJECTS',
    SET_POSTS: 'SET_POSTS',
    SET_CURRENT_POST: 'SET_CURRENT_POST',
    LOADING: 'LOADING',
};

const state = {
    books: Object,
    projects: Object,
    posts: Array,
    currentPost: Object,
    nextPostExists: false,
    previousPostExists: false,
    refCount: 0,
    isLoading: false,
};

const getters = {
    isLoading(state) {
        return state.isLoading;
    },
    bookList(state) {
        return state.books;
    },
    projects(state) {
        return state.projects;
    },
    postList(state) {
        return state.posts;
    },
    recentPostList(state) {
        if (Array.isArray(state.posts)) {
            return state.posts.slice(0, Math.min(state.posts.length, 10));
        }
        return [];
    },
    currentPost(state) {
        return state.currentPost;
    },
    currentPostLDJson(state) {
        return {
            script: [{
                type: 'application/ld+json',
                vmid: 'post-json-ld',
                json: {
                    '@context': 'http://schema.org',
                    '@type': 'BlogPosting',
                    headline: state.currentPost.title,
                    description: state.currentPost.title,
                    keywords: '', // TODO Concatenate tags
                    image: 'https://i.imgur.com/IUf6PIg.png',
                    url: `https://${process.env.VUE_APP_API_URL}/blog/${state.currentPost.id}`,
                    datePublished: state.currentPost.posted_on,
                    dateModified: state.currentPost.posted_on,
                    articleBody: state.currentPost.text,
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                    },
                    author: {
                        '@type': 'Person',
                        name: 'Martin Heinz',
                        url: `https://${process.env.VUE_APP_API_URL}`,
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'Martin Heinz',
                        url: `https://${process.env.VUE_APP_API_URL}`,
                        logo: {
                            '@type': 'ImageObject',
                            url: 'https://i.imgur.com/IUf6PIg.png',
                            width: '32',
                            height: '32',
                        },
                    },
                },
            }],
        };
    },

    currentPostText(state) {
        return {
            template: `<div>${state.currentPost.text}</div>`,
        };
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
    previousPostExists(state) {
        return state.previousPostExists;
    },
    nextPostExists(state) {
        return state.nextPostExists;
    },
};

const actions = {
    fetchBooks({ commit }) {
        return axios.get(`${API_URL}books/`)
            .then((r) => r.data.books)
            .then((books) => {
                commit(types.SET_BOOKS, books);
            });
    },
    fetchProjects({ commit }) {
        return axios.get(`${API_URL}projects/`)
            .then((r) => r.data.projects)
            .then((projects) => {
                commit(types.SET_PROJECTS, projects);
            });
    },
    fetchPosts({ commit }) {
        return axios.get(`${API_URL}posts/`)
            .then((r) => r.data.posts)
            .then((posts) => {
                commit(types.SET_POSTS, posts);
            });
    },
    fetchPostById({ commit }, payload) {
        return axios.get(`${API_URL}posts/${payload.id}`)
            .then((r) => r.data)
            .then((data) => {
                commit(types.SET_CURRENT_POST, data);
            });
    },
};

const mutations = {
    [types.SET_BOOKS](state, books) {
        state.books = books;
    },
    [types.SET_PROJECTS](state, projects) {
        state.projects = projects;
    },
    [types.SET_POSTS](state, posts) {
        state.posts = posts;
    },
    [types.SET_CURRENT_POST](state, post) {
        state.currentPost = post;
        state.previousPostExists = post.previous_post_id !== 0;
        state.nextPostExists = post.next_post_id !== 0;
    },
    [types.LOADING](state, isLoading) {
        if (isLoading) {
            state.refCount += 1;
            state.isLoading = true;
        }
        else if (state.refCount > 0) {
            state.refCount -= 1;
            state.isLoading = (state.refCount > 0);
        }
    },
};

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});

export const s = {
    state,
    getters,
    actions,
    mutations,
};

export default store;
