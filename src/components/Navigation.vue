<template>
    <div id="header-post">
        <font-awesome-icon id="menu-icon" href="#" icon="bars" size="lg"
                           v-on:click="active = !active"
                           v-bind:class="{ 'menu-active' : active }"/>
        <font-awesome-icon id="menu-icon-tablet" href="#" icon="bars" size="lg"
                           v-on:click="active = !active"
                           v-bind:class="{ 'menu-active' : active }"/>

        <font-awesome-icon id="top-icon-tablet" href="#" style="display:none;" icon="bars" size="lg"
                           v-on:click="active = !active"
                           v-bind:class="{ 'menu-active' : active }"/>
        <span id="menu" style="visibility: visible;"
              v-show="active">
            <BaseMenu :items=items></BaseMenu>
            <br>
            <MenuActions
                    :url_previous=actions.url_previous
                    :url_next=actions.url_next>
            </MenuActions>
            <br>

            <SocialSharingList></SocialSharingList>
            <TableOfContents id="toc"
                             :label="tree.label"
                             :nodes="tree.nodes"
                             :href="tree.href"
                             :depth="1">
            </TableOfContents>
        </span>
    </div>
</template>

<script>

import BaseMenu from '@/components/BaseMenu.vue';
import MenuActions from '@/components/MenuActions.vue';
import SocialSharingList from '@/components/SocialSharingList.vue';
import TableOfContents from '@/components/TableOfContents.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Navigation',
    components: {
        BaseMenu, MenuActions, SocialSharingList, TableOfContents,
    },
    props: {
        items: Array,
    },
    mounted() {
        this.fetchPostById({ id: this.$route.params.id });
    },
    methods: {
        ...mapActions([
            'fetchPostById',
        ]),
    },
    computed: {
        ...mapGetters([
            'previousPostId',
            'nextPostId',
        ]),
        actions() {
            return {
                url_previous: `/blog/${this.previousPostId}`,
                url_next: `/blog/${this.nextPostId}`,
            };
        },
    },

    data() {
        return {
            active: false,
            tree: { // TODO axios
                nodes: [
                ],
            },
        };
    },
};
</script>

<style>
    #header-post #menu-icon:hover {
        color: #2bbc8a;
    }

    #header-post #menu-icon-tablet:hover {
        color: #2bbc8a;
    }
    #header-post #top-icon-tablet {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        margin-right: 2rem;
        margin-left: 15px;
    }
    #header-post #top-icon-tablet:hover {
        color: #2bbc8a;
    }
    #header-post .active {
        color: #2bbc8a;
    }

    #menu-icon, #menu-icon-tablet, #top-icon-tablet {
        margin-top: 5px;
    }

    .menu-inactive {
        color: #c9cacc;
    }
    .menu-active {
        color: #2bbc8a;
    }

    #toc {
        overflow: auto;
        margin-top: 1rem;
        padding-right: 2rem;
        max-width: 20em;
        max-height: calc(95vh - 7rem);
        text-align: right;
    }

    #header-post #nav {
        color: #2bbc8a;
        letter-spacing: 0.01em;
        font-weight: 200;
        font-style: normal;
        font-size: 0.82rem;
    }
    #header-post #nav ul {
        line-height: 15px;
    }
    #header-post #nav ul a {
        margin-right: 18px;
        color: #2bbc8a;
    }
    #header-post #nav ul a:hover {
        background-image: linear-gradient(transparent, transparent 5px, #2bbc8a 5px, #2bbc8a);
        background-position: bottom;
        background-size: 100% 6px;
        background-repeat: repeat-x;
    }
    #header-post #nav ul li {
        border-right: 1px dotted #2bbc8a;
    }
    #header-post #nav ul li:last-child {
        margin-right: 0;
        border-right: 0;
    }
    #header-post #nav ul li:last-child a {
        margin-right: 0;
    }
</style>
