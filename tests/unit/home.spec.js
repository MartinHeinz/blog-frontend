import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

import * as axios from 'axios';

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios');

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
        const resp = books;
        axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: resp }));

        return Home.methods.getBooks().then(data => expect(data).toEqual({ status: 200, data: books }));
    });
    it('Gets all Posts', () => {
        const resp = posts;
        axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: resp }));

        return Home.methods.getPosts().then(data => expect(data).toEqual({ status: 200, data: posts }));
    });
    it('Calls Mounted method', () => {
        const resp = posts;
        const populateFields = jest.fn();
        axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: resp }));
        shallowMount(Home, {
            methods: {
                populateFields,
            },
        });
        expect(populateFields).toHaveBeenCalled();
    });
});
