<template>
    <span id="actions">
      <a id="top" href="#"/>
      <ul>
        <li v-if="previousPostExists">
            <router-link :to="url_previous">
                <v-hover>
                <font-awesome-icon icon="chevron-left" :href="url_previous" @mouseover="prev_active = true" @mouseout="prev_active = false"
                                   slot-scope="{ hover }"
                                   :class="`${hover? 'icon-active': 'icon-inactive'}`"/>
                </v-hover>
            </router-link>
        </li>
        <li v-if="nextPostExists">
            <router-link :to="url_next">
                <v-hover>
                <font-awesome-icon icon="chevron-right" :href="url_next" @mouseover="next_active = true" @mouseout="next_active = false"
                                   slot-scope="{ hover }"
                                   :class="`${hover? 'icon-active': 'icon-inactive'}`"/>
                </v-hover>
            </router-link>
        </li>
        <li>
            <v-hover>
                <a href="#" id="top_icon"
                   @mouseover="top_active = true" @mouseout="top_active = false" @click.native="scrollToTop"
                   slot-scope="{ hover }" :class="`${hover? 'icon-active': 'icon-inactive'}`">
                        <font-awesome-icon icon="chevron-up"/>
                </a>
            </v-hover>
        </li>
        <li>
            <a :href="`https://${getHost()}/rss`">
                <v-hover>
                <font-awesome-icon icon="rss" @mouseover="rss_active = true" @mouseout="rss_active = false"
                                   slot-scope="{ hover }"
                                   :class="`${hover? 'icon-active': 'icon-inactive'}`"/>
                </v-hover>
             </a>
        </li>
        <li>
            <v-hover>
            <font-awesome-icon href="#" icon="share-alt" @mouseover="share_active = true" @mouseout="share_active = false"
                               v-on:click="toggle_social_sharing"
                               slot-scope="{ hover }"
                               :class="`${hover? 'icon-active': 'icon-inactive'}`"/>
            </v-hover>
        </li>
      </ul>

      <span class="info" v-show="prev_active">Previous post</span>
      <span class="info" v-show="next_active">Next post</span>
      <span class="info" v-show="top_active">Back to top</span>
      <span class="info" v-show="rss_active">RSS feed</span>
      <span class="info" v-show="share_active">Share post</span>
    </span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MenuActions',
    props: {
        url_previous: String,
        url_next: String,
    },
    methods: {
        toggle_social_sharing() {
            this.$root.$emit('toggle_social_sharing');
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        getHost() {
            return process.env.VUE_APP_API_URL;
        },
    },
    computed: {
        ...mapGetters([
            'previousPostExists',
            'nextPostExists',
        ]),
    },
    data() {
        return {
            prev_active: false,
            next_active: false,
            top_active: false,
            rss_active: false,
            share_active: false,
        };
    },
};
</script>

<style>
    #actions {
        float: right;
        margin-top: 2rem;
        margin-right: 2rem;
        width: auto;
        text-align: right;
    }
    #actions ul {
        display: inline-block;
        float: right;
    }
    #actions .info {
        display: inline;
        float: left;
        margin-right: 2rem;
        font-style: italic;
    }

    .icon-inactive {
        color: #c9cacc;
    }
    .icon-active {
        color: #d480aa;
        cursor: pointer;
    }
</style>
