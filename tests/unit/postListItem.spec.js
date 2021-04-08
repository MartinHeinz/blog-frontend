import { createLocalVue, mount } from '@vue/test-utils';
import PostListItem from '@/components/PostListItem.vue';
import Router from 'vue-router';
import dayjs from 'dayjs';

describe('PostListItem.vue', () => {
    it('Creates list item with link and date', () => {
        const localVue = createLocalVue();
        const router = new Router({ mode: 'history' });
        localVue.use(Router);
        localVue.filter('formatDate', value => dayjs(String(value)).format('ll')); // TODO import this from @/main.js

        const published = '2018-01-01T15:30:00Z';
        const url = '/blog/9';
        const value = 'New blog Post';

        const wrapper = mount(PostListItem, {
            localVue,
            router,
            propsData: {
                published,
                url,
                value,
            },
        });

        expect(wrapper.html()).toContain(`<a href="${url}" class="">${value}</a>`);
        expect(wrapper.html()).toContain(`<time datetime="${published}" itemprop="datePublished">Jan 1, 2018</time>`);
    });
});
