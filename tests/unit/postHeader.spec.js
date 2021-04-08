import { createLocalVue, shallowMount } from '@vue/test-utils';
import PostHeader from '@/components/PostHeader.vue';

import Vuetify from 'vuetify';
import Vue from 'vue';
import Vuex from 'vuex';
import dayjs from 'dayjs';

const header = {
    title: 'Second Blog Post',
    author: 'Martin',
    published: '0001-01-01T00:00:00Z',
    tags: [
        {
            id: 1,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '0001-01-01T00:00:00Z',
            deleted_at: null,
            post_id: 1,
            name: 'Python',
        },
        {
            id: 3,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '0001-01-01T00:00:00Z',
            deleted_at: null,
            post_id: 1,
            name: 'Crypto',
        }],
};

const $route = {
    hash: '',
    params: { id: '2' },
};

describe('PostHeader.vue', () => {
    Vue.use(Vuex);
    let getters;
    let actions;
    let store;

    beforeEach(() => {
        getters = {
            currentPostHeader: () => header,
        };
        actions = {
            fetchPostById: jest.fn(),
        };

        store = new Vuex.Store({
            getters,
            actions,
        });
    });

    it('Sets header attributes of blog post header', () => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.filter('formatDate', value => dayjs(String(value)).format('ll')); // TODO import this from @/main.js

        const wrapper = shallowMount(PostHeader, {
            localVue,
            store,
            mocks: {
                $route,
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });
});
