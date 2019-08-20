<template>
    <div class="content">
        <h1 class="title">Martin Heinz</h1>
        <h1 class="subtitle">Personal Website & Blog</h1>
        <About></About>
        <PostList></PostList>
        <Projects></Projects>
        <BookList></BookList>
        <Contact></Contact>
        <script v-html="jsonld" type="application/ld+json"></script>
    </div>
</template>

<script>
import About from '@/components/About.vue';
import BookList from '@/components/BookList.vue';
import PostList from '@/components/PostList.vue';
import Contact from '@/components/Contact.vue';
import Projects from '@/components/Projects.vue';

export default {
    name: 'Home',
    components: {
        About,
        PostList,
        BookList,
        Contact,
        Projects,
    },

    data() {
        const jsonld = {
            '@context': 'http://schema.org',
            '@type': 'Person',
            name: 'Martin Heinz',
            url: `https://${process.env.VUE_APP_API_URL}`,
            jobTitle: 'DevOps Engineer',
            alumniOf: 'Comenius University in Bratislava',
            gender: 'male',
            image: '', // TODO
            sameAs: [
                'https://www.linkedin.com/in/heinz-martin/',
                'https://dev.to/martinheinz',
                'https://medium.com/@martin7.heinz',
                'https://twitter.com/Martin_Heinz_',
            ],
        };

        return { jsonld };
    },
};
</script>

<style scoped>
    .title {
        font-size: 2em;
    }
    .subtitle {
        font-size: 1.2em;
        color: #666;
        margin-top: -4px;
        margin-bottom: -4px;
    }

    * {
        box-sizing: border-box;
    }

    @media screen and (max-width: 600px) {
        .column {
            text-align: center;
            width: 100%;
        }
    }
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        overflow-wrap: break-word;
        padding-top: 4rem;
        padding-bottom: 4rem;
        box-sizing: border-box;
    }
</style>
