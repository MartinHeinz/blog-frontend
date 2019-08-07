import { createLocalVue, shallowMount } from '@vue/test-utils';
import Post from '@/components/Post.vue';

import Vue from 'vue';
import Vuex from 'vuex';

const text = 'This is blog about something else...';
const $route = {
    hash: '',
    params: { id: '2' },
};

describe('Post.vue', () => {
    Vue.use(Vuex);
    let getters;
    let actions;
    let store;

    beforeEach(() => {
        getters = {
            currentPostText: () => ({ template: `<div>${text}</div>` }),
        };
        actions = {
            fetchPostById: jest.fn(),
        };

        store = new Vuex.Store({
            getters,
            actions,
        });
    });

    it('Sets text of post', () => {
        const localVue = createLocalVue();

        const wrapper = shallowMount(Post, {
            localVue,
            store,
            mocks: {
                $route,
            },
        });
        expect(wrapper.html()).toMatchSnapshot(); // TODO Fix <anonymous-stab>
    });
});
