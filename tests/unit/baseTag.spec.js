import { createLocalVue, mount } from '@vue/test-utils';
import BaseTag from '@/components/BaseTag.vue';
import Router from 'vue-router';

describe('BaseTag.vue', () => {
    it('Creates Tag link', () => {
        const localVue = createLocalVue();
        const router = new Router({ mode: 'history' });
        localVue.use(Router);

        const name = 'test_name';
        const url = 'test';

        const wrapper = mount(BaseTag, {
            localVue,
            router,
            propsData: {
                url,
                name,
            },
        });

        expect(wrapper.html()).toContain(`<a href="/tags/${url}/" class="tag-link">${name}</a>`);
    });
});
