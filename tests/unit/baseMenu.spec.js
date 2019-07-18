import { createLocalVue, mount } from '@vue/test-utils';
import BaseMenu from '@/components/BaseMenu.vue';
import Router from 'vue-router';

const items = [
    { value: 'Home', url: '/' },
    { value: 'Contact', url: '/contact' },
    { value: 'About', url: '/about' },
];

describe('BaseMenu.vue', () => {
    it('renders correcly', () => {
        const localVue = createLocalVue();
        const router = new Router({ mode: 'history' });
        localVue.use(Router);
        const wrapper = mount(BaseMenu, {
            localVue,
            router,
            propsData: {
                items,
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
