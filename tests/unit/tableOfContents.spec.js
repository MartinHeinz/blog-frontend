import { createLocalVue, mount } from '@vue/test-utils';
import TableOfContents from '@/components/TableOfContents.vue';

const tree = {
    nodes: [
        {
            label: 'item1',
            href: '/item1',
            nodes: [
                {
                    label: 'item1.1',
                    href: '/item1.1',
                },
                {
                    label: 'item1.2',
                    href: '/item1.2',
                    nodes: [
                        {
                            label: 'item1.2.1',
                            href: '/item1.2.1',
                        },
                    ],
                },
            ],
        },
        {
            label: 'item2',
            href: '/item2',
        },
    ],
};

describe('TableOfContents.vue', () => {
    it('renders correcly', () => {
        const localVue = createLocalVue();
        const wrapper = mount(TableOfContents, {
            localVue,
            propsData: {
                label: tree.label,
                nodes: tree.nodes,
                href: tree.href,
                depth: 1,
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
