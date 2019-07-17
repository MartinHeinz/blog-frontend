import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import PostList from '@/components/PostList.vue';
import moment from 'moment';

const items = [
    {
        id: 1,
        created_at: '0001-01-01T00:00:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        deleted_at: null,
        title: 'First Blog Post',
        text: 'This is blog about something.',
        author: 'Martin',
        next: null,
        next_post_id: 2,
        previous: null,
        previous_post_id: 0,
        posted_on: '0001-01-01T00:00:00Z',
        sections: null,
        tags: null,
    },
    {
        id: 3,
        created_at: '0001-01-01T00:00:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        deleted_at: null,
        title: '3rd Blog Post',
        text: 'Another dummy content',
        author: 'Martin',
        next: null,
        next_post_id: 0,
        previous: null,
        previous_post_id: 2,
        posted_on: '0001-01-01T00:00:00Z',
        sections: null,
        tags: null,
    },
];

describe('PostList.vue', () => {
    it('renders correcly', () => {
        const localVue = createLocalVue();
        localVue.filter('formatDate', value => moment(String(value)).format('ll')); // TODO import this from @/main.js
        localVue.component('router-link', RouterLinkStub);
        const wrapper = mount(PostList, {
            localVue,
            propsData: {
                items,
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
