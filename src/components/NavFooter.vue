<template>
    <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
        <span class="footer-action" v-if="previousPostExists">
            <router-link :to="actions.url_previous">
                <font-awesome-icon icon="chevron-left" size="20" :href="actions.url_previous"/>
                <span class="footer-action-text">Previous</span>
            </router-link>
        </span>
        <span class="footer-action" v-if="nextPostExists">
            <router-link :to="actions.url_next">
                <font-awesome-icon icon="chevron-right" size="20" :href="actions.url_next"/>
                <span class="footer-action-text">Next</span>
            </router-link>
        </span>

        <span class="footer-action">
            <router-link to="/subscribe">
                <font-awesome-icon size="17" icon="rss"/>
                <span class="footer-action-text">Subscribe</span>
            </router-link>
        </span>
        <span class="footer-action" v-on:click="scrollToTop">
            <font-awesome-icon id="top_icon"
                               icon="chevron-up"
                               href="#"
                               size="20"
            />
            <span class="footer-action-text">Top</span>
        </span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NavFooter',
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    computed: {
        ...mapGetters([
            'previousPostExists',
            'nextPostExists',
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
    methods: {
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return;
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        getHost() {
            return process.env.VUE_APP_API_URL;
        },
    },
    onScroll() {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
            return;
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
            return;
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
    },

};
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .navbar {
        height: 60px;
        border-top: 1px solid #666;
        background: #212326;
        position: fixed;
        transform: translate3d(0, 0, 0);
        transition: 0.1s all ease-out;

        overflow: auto;
        width: 100%;
        text-align: center;
        white-space: nowrap;

        bottom: 0;
        left: 0;
        right: 0;
        margin-bottom: 0;
        margin-top: 3px;
    }
    .navbar.navbar--hidden {
        transform: translate3d(0, 100%, 0);
    }

    .footer-action {
        display: inline-block;
        padding-left: 1rem;
        padding-top: 1.1rem;
        padding-right: 1rem;
        color: #2bbc8a;
    }
    .footer-action-text {
        position: relative;
        bottom: 3px;
        left: 10px;
    }

    .content a {
        color: #2bbc8a !important;
        text-decoration: none !important;
        background-image: linear-gradient(transparent, transparent, transparent, transparent);
    }
    .content a:hover {
        background-image: linear-gradient(transparent, transparent);
    }
    @media screen and (min-width: 601px) {
        .navbar {
            display: none;
        }
    }
</style>
