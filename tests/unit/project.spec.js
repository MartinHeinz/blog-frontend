import { createLocalVue, mount } from '@vue/test-utils';
import PostListItem from '@/components/Project.vue';
import Router from 'vue-router';

describe('Project.vue', () => {
    it('renders correcly', () => {
        const localVue = createLocalVue();
        const router = new Router({ mode: 'history' });
        localVue.use(Router);

        const name = 'My Project';
        const url = 'https://github.com/something';
        const description = 'This is description of this project...';
        const src = 'https://via.placeholder.com/150';
        const tags = [
            {
                name: 'Golang',
                url: 'golang',
            },
            {
                name: 'Vue',
                url: 'vue',
            },
        ];

        const wrapper = mount(PostListItem, {
            localVue,
            router,
            propsData: {
                name,
                url,
                description,
                src,
                tags,
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
