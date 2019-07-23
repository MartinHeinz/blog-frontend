import { createLocalVue, mount } from '@vue/test-utils';
import BookList from '@/components/BookList.vue';

import Vuex from 'vuex';
import Vue from 'vue';

const items = [
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
];

describe('BookList.vue', () => {
    Vue.use(Vuex);
    let getters;
    let actions;
    let store;

    beforeEach(() => {
        getters = {
            bookList: () => items,
        };
        actions = {
            fetchBooks: jest.fn(),
        };

        store = new Vuex.Store({
            getters,
            actions,
        });
    });

    it('renders correcly', () => {
        const localVue = createLocalVue();
        const wrapper = mount(BookList, {
            localVue,
            store,
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
