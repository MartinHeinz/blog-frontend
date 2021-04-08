import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import PostList from '@/components/PostList.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import dayjs from 'dayjs';

const items = [
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
];

describe('PostList.vue', () => {
    Vue.use(Vuex);
    let getters;
    let actions;
    let store;

    beforeEach(() => {
        getters = {
            recentPostList: () => items,
            postList: () => items,
        };
        actions = {
            fetchPosts: jest.fn(),
        };

        store = new Vuex.Store({
            getters,
            actions,
        });
    });

    it('renders correcly', () => {
        const localVue = createLocalVue();
        localVue.filter('formatDate', value => dayjs(String(value)).format('ll')); // TODO import this from @/main.js
        localVue.component('router-link', RouterLinkStub);
        const wrapper = mount(PostList, {
            computed: {
                postListEmpty: () => false,
                postListLength: () => 2,
            },
            localVue,
            store,
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
