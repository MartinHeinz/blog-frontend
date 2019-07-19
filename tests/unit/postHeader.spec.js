import { createLocalVue, shallowMount } from '@vue/test-utils';
import PostHeader from '@/components/PostHeader.vue';
import { API_URL } from '@/common/config';

import * as axios from 'axios';

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

const $route = {
    hash: '',
    params: { id: '2' },
};

describe('PostHeader.vue', () => {
    it('Sets header attributes of blog post header', () => {
        mock.onGet(`${API_URL}posts/2`).reply(200, post);
        const localVue = createLocalVue();

        const wrapper = shallowMount(PostHeader, {
            localVue,
            mocks: {
                $route,
            },
        });
        return wrapper.vm.updateHeaderData().then(() => {
            expect(wrapper.vm.$data.title).toEqual(post.title);
            expect(wrapper.vm.$data.author).toEqual(post.author);
            expect(wrapper.vm.$data.published).toEqual(post.posted_on);
            expect(wrapper.vm.$data.tags).toEqual(post.tags);
        });
    });
});
