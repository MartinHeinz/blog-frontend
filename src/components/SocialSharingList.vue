<template>
    <div id="share" style="visibility: visible;"
         v-show="share_active">
        <social-sharing :url=path inline-template>
            <ul class="networks">
                <li>
                    <network network="facebook">
                        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
                    </network>
                </li>
                <li>
                    <network network="linkedin">
                        <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
                    </network>
                </li>
                <li>
                    <network network="reddit">
                        <font-awesome-icon :icon="['fab', 'reddit']"></font-awesome-icon>
                    </network>
                </li>
                <li>
                    <network network="twitter">
                        <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
                    </network>
                </li>
                <li>
                    <network network="vk">
                        <font-awesome-icon :icon="['fab', 'vk']"></font-awesome-icon>
                    </network>
                </li>
                <li>
                    <network network="weibo">
                        <font-awesome-icon :icon="['fab', 'weibo']"></font-awesome-icon>
                    </network>
                </li>
                <li>
                    <network network="whatsapp">
                        <font-awesome-icon :icon="['fab', 'whatsapp']"></font-awesome-icon>
                    </network>
                </li>
            </ul>
        </social-sharing>

    </div>
</template>

<script>

export default {
    name: 'SocialSharingList',
    props: {
        items: Array,
        actions: Object,
    },
    mounted() {
        this.$root.$on('toggle_social_sharing', () => {
            this.share_active = !this.share_active;
        });
    },
    data() {
        return {
            share_active: false,
            path: window.location.href,
            fb_active: false,
        };
    },
};
</script>

<style>

    #header-post #share {
        clear: both;
        padding-top: 1rem;
        padding-right: 2rem;
        text-align: right;
    }
    #header-post #share li {
        display: block;
        margin: 0;
    }

    .networks li:hover {
        color: #d480aa;
        cursor: pointer;
    }
</style>
