import { createLocalVue, shallowMount } from '@vue/test-utils';
import Blog from '@/components/Blog.vue';
import { API_URL } from '@/common/config';

import * as axios from 'axios';

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

const post = {
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
};

const propsData = {
    header: {
        title: 'title',
        author: 'author',
        published: 'published',
    },
};

const $route = {
    hash: '',
    params: { id: '1' },
};

describe('Blog .vue', () => {
    it('Calls Mounted method', () => {
        const fetchHeaderAndNavigationData = jest.fn();
        mock.onGet(`${API_URL}posts/1`).reply(200, post);

        shallowMount(Blog, {
            methods: {
                fetchHeaderAndNavigationData,
            },
            mocks: {
                $route,
            },
            propsData,
        });
        expect(fetchHeaderAndNavigationData).toHaveBeenCalled();
    });
    it('Sets Header and Navigation fields', () => {
        mock.onGet(`${API_URL}posts/1`).reply(200, post);
        const localVue = createLocalVue();

        const wrapper = shallowMount(Blog, {
            localVue,
            mocks: {
                $route,
            },
            propsData,
        });
        return wrapper.vm.fetchHeaderAndNavigationData().then(() => {
            expect(wrapper.props().text).toEqual(post.text);
            expect(wrapper.props().header).toEqual({
                title: post.title,
                author: post.author,
                published: post.posted_on,
            });
            expect(wrapper.props().tags).toEqual(post.tags);
            expect(wrapper.props().previous).toEqual(post.previous_post_id);
            expect(wrapper.props().next).toEqual(post.next_post_id);
        });
    });
});
