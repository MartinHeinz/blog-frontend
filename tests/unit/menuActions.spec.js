import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import MenuActions from '@/components/MenuActions.vue';


describe('MenuActions.vue', () => {
    const localVue = createLocalVue();
    localVue.component('router-link', RouterLinkStub);
    localVue.use(Vuetify);
    const wrapper = mount(MenuActions, {
        localVue,
        propsData: {
            url_previous: '/blog/1',
            url_next: '/blog/3',
        },
    });
    it('renders correcly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    it('renders correcly when icon is hovered', () => {
        wrapper.setData({ next_active: true });
        expect(wrapper.element).toMatchSnapshot();
    });
});
