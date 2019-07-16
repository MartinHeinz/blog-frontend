import { shallowMount } from '@vue/test-utils';
import SocialSharingList from '@/components/SocialSharingList.vue';

describe('SocialSharingList.vue', () => {
    it('Toggles social sharing list', () => {
        const wrapper = shallowMount(SocialSharingList);

        expect(wrapper.html()).toContain('<div id="share" style="visibility: visible; display: none;">');
        wrapper.setData({ share_active: !wrapper.vm.share_active });
        expect(wrapper.html()).toContain('<div id="share" style="visibility: visible;">');
    });
});
