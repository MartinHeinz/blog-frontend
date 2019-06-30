import { shallowMount } from '@vue/test-utils';
import Post from '@/components/Post.vue';

describe('Post.vue', () => {
    it('renders props.text when passed', () => {
        const text = 'new message';
        const wrapper = shallowMount(Post, {
            propsData: { text },
        });
        expect(wrapper.text()).toMatch(text);
    });
});
