import { createLocalVue, shallowMount } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue';
import { API_URL } from '@/common/config';

import * as axios from 'axios';
import Vuetify from 'vuetify';

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

const propsData = {
    actions: {
        url_previous: '',
        url_next: '',
    },
};

const $route = {
    hash: '',
    params: { id: '2' },
};

describe('Navigation.vue', () => {
    it('Sets previous and next post ids', () => {
        mock.onGet(`${API_URL}posts/2`).reply(200, post);
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        const wrapper = shallowMount(Navigation, {
            localVue,
            mocks: {
                $route,
            },
            propsData,
        });
        return wrapper.vm.updateNavigation().then(() => {
            expect(wrapper.vm.$data.actions).toEqual({
                url_previous: '/blog/1',
                url_next: '/blog/3',
            });
        });
    });
});
