<template>
    <header>
        <h1 class="posttitle" itemprop="name headline">{{ currentPostHeader.title }}</h1>
        <div class="meta">

            <span class="author" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                <span itemprop="name">{{currentPostHeader.author}}</span>
            </span>

            <div class="postdate">
                <time :datetime="currentPostHeader.published" itemprop="datePublished">{{ currentPostHeader.published | formatDate }}</time>
            </div>

            <div class="article-tag">
                <font-awesome-icon icon="tag"/>
                <BaseTag v-for="tag in currentPostHeader.tags"
                              v-bind:url="tag.url"
                              v-bind:name="tag.name"
                              v-bind:key="tag.key">
                </BaseTag>
            </div>

        </div>
    </header>
</template>

<script>
import BaseTag from '@/components/BaseTag.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'PostHeader',
    components: { BaseTag },
    metaInfo() {
        return {
            title: this.currentPostHeader.title,
            meta: [
                { name: 'title', content: this.currentPostHeader.title },
                { name: 'og:title', content: this.currentPostHeader.title },
                { name: 'og:description', content: this.currentPostHeader.title },
                { name: 'og:image', content: 'https://res.cloudinary.com/martinheinz/image/upload/v1567247069/blog/og_image_s4v0wv.png' },
                { name: 'og:image:type', content: 'image/png' },
                { name: 'og:image:width', content: '500' },
                { name: 'og:image:height', content: '275' },
            ],
        };
    },
    watch: {
        '$route.params.id': {
            handler() {
                this.fetchPostById({ id: this.$route.params.id });
            },
        },
    },
    computed: {
        ...mapGetters([
            'currentPostHeader',
        ]),
    },
    methods: {
        ...mapActions([
            'fetchPostById',
        ]),
    },
};
</script>

<style>

    .article-tag .tag-link {
        background-image: linear-gradient(transparent, transparent 10px, #d480aa 10px, #d480aa);
        background-position: bottom;
        background-size: 100% 6px;
        background-repeat: repeat-x;
    }

    .tag-link a:hover {
        box-shadow: inset 0 0px 0 white, inset 0 -2px 0 #d480aa;
    }

    .tag-link a {
        color: #c9cacc;
        text-decoration: none;
        background-image: linear-gradient(transparent, transparent 5px, #c9cacc 5px, #c9cacc);
        background-position: bottom;
        background-size: 100% 6px;
        background-repeat: repeat-x;
    }

    article header .posttitle {
        margin-top: 0;
        margin-bottom: 0;
        text-transform: none;
        font-size: 1.5em;
        line-height: 1.25;
    }

    .posttitle {
        text-transform: none;
        font-size: 1.5em;
        line-height: 1.25;
    }

    header .meta {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    header .meta * {
        color: #ccc;
        font-size: 0.85rem;
    }

    header .author {
        text-transform: uppercase;
        letter-spacing: 0.01em;
        font-weight: 700;
        margin: 0 5px;
    }

    header .postdate {
        display: inline;
    }

    @media (min-width: 480px) {
        .article-tag {
            display: inline;
        }
        .article-tag:before {
            content: " | ";
        }
    }

    span:first-child {
        margin-left:0;
    }
</style>
