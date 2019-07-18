import { createLocalVue, shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';
import { API_URL } from '@/common/config';

import * as axios from 'axios';

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

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
    ],
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
    ],
};

describe('Home.vue', () => {
    it('Gets all Books', () => {
        mock.onGet(`${API_URL}books/`).reply(200, books);

        return Home.methods.getBooks().then(data => expect(data.data).toEqual(books));
    });
    it('Gets all Posts', () => {
        mock.onGet(`${API_URL}posts/`).reply(200, posts);

        return Home.methods.getPosts().then(data => expect(data.data).toEqual(posts));
    });
    it('Calls Mounted method', () => {
        const populateFields = jest.fn();
        mock.onGet(`${API_URL}books/`).reply(200, {});
        shallowMount(Home, {
            methods: {
                populateFields,
            },
        });
        expect(populateFields).toHaveBeenCalled();
    });
    it('Sets Books and Posts fields', () => {
        mock.onGet(`${API_URL}books/`).reply(200, books);
        mock.onGet(`${API_URL}posts/`).reply(200, posts);
        const localVue = createLocalVue();

        const wrapper = shallowMount(Home, {
            localVue,
        });
        return wrapper.vm.populateFields().then(() => {
            expect(wrapper.vm.$data.books).toEqual(books.books);
            expect(wrapper.vm.$data.posts).toEqual(posts.posts);
        });
    });
});
