import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { s } from '@/store';
import { cloneDeep } from 'lodash';
import * as axios from 'axios';
import { API_URL } from '@/common/config';

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

const post = {
    id: 2,
    created_at: '0001-01-01T00:00:00Z',
    updated_at: '0001-01-01T00:00:00Z',
    deleted_at: null,
    title: 'Second Blog Post',
    text: 'This is blog about something else...',
    author: 'Martin',
    next: null,
    next_post_id: 3,
    previous: null,
    previous_post_id: 1,
    posted_on: '0001-01-01T00:00:00Z',
    sections: null,
    tags: null,
};
const posts = {
    posts: [
        {
            id: 1,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '0001-01-01T00:00:00Z',
            deleted_at: null,
            title: 'First Blog Post',
            text: 'This is blog about something.',
            author: 'Martin',
            next: null,
            next_post_id: 2,
            previous: null,
            previous_post_id: 0,
            posted_on: '0001-01-01T00:00:00Z',
            sections: null,
            tags: null,
        },
        {
            id: 3,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '0001-01-01T00:00:00Z',
            deleted_at: null,
            title: '3rd Blog Post',
            text: 'Another dummy content',
            author: 'Martin',
            next: null,
            next_post_id: 0,
            previous: null,
            previous_post_id: 2,
            posted_on: '0001-01-01T00:00:00Z',
            sections: null,
            tags: null,
        },
    ],
};

const books = {
    books: [
        {
            id: 1,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '0001-01-01T00:00:00Z',
            deleted_at: null,
            title: 'The Go Programming Language',
            src: 'https://www.gopl.io/cover.png',
            url: 'https://www.gopl.io/',
            alt: 'The Go Programming Language',
        },
        {
            id: 2,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '0001-01-01T00:00:00Z',
            deleted_at: null,
            title: 'Clean Code',
            src: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293._SX318_.jpg',
            url: 'https://www.goodreads.com/book/show/3735293-clean-code',
            alt: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        },
    ],
};

describe('Vuex Store', () => {
    it('Action "fetchPostById" gets correct post', () => {
        mock.onGet(`${API_URL}posts/2`).reply(200, post);
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep(s));

        return store.dispatch('fetchPostById', { id: 2 }).then(() => {
            expect(store.getters.currentPost).toEqual(post);
            expect(store.getters.currentPostText).toEqual(post.text);
            expect(store.getters.currentPostHeader).toEqual({
                title: post.title,
                author: post.author,
                published: post.posted_on,
                tags: post.tags,
            });
            expect(store.getters.previousPostId).toEqual(post.previous_post_id);
            expect(store.getters.nextPostId).toEqual(post.next_post_id);
        });
    });
    it('Action "fetchPosts" gets all posts', () => {
        mock.onGet(`${API_URL}posts/`).reply(200, posts);
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep(s));

        return store.dispatch('fetchPosts').then(() => {
            expect(store.getters.postList).toEqual(posts.posts);
        });
    });
    it('Action "fetchBooks" gets all books', () => {
        mock.onGet(`${API_URL}books/`).reply(200, books);
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep(s));

        return store.dispatch('fetchBooks').then(() => {
            expect(store.getters.bookList).toEqual(books.books);
        });
    });
});
