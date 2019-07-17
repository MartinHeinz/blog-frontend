import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import BaseFooter from '@/components/BaseFooter.vue';

const items = [
    { value: 'Home', url: '/' },
    { value: 'Contact', url: '/contact' },
    { value: 'About', url: '/about' },
];

describe('BaseFooter.vue', () => {
    it('renders correcly', () => {
        const localVue = createLocalVue();
        localVue.component('router-link', RouterLinkStub);
        const wrapper = mount(BaseFooter, {
            localVue,
            propsData: {
                items,
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
