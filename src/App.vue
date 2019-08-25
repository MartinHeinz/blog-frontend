<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
    metaInfo: {
        meta: [
            { vmid: 'charset', charset: 'utf-8' },
            {
                vmid: 'og:title',
                property: 'og:title',
                content: 'Personal Website & Blog',
                // template: '%s - My page',
                template: chunk => `Martin Heinz - ${chunk}`,
            },
            {
                vmid: 'description',
                property: 'description',
                content: `Welcome to my personal website and blog, here you can find some information about me, contact, social media links as well as
                my blog posts`,
            },
        ],
        link: [
            { rel: 'shortcut icon', type: 'image/png', href: 'https://i.imgur.com/IUf6PIg.png' },
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML', async: true },
            {
                vmid: 'home-json-ld',
                type: 'application/ld+json',
                json: {
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
                        'https://medium.com/@martin.heinz',
                        'https://twitter.com/Martin_Heinz_',
                    ],
                },
            },
        ],
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Personal Website & Blog',
        // all titles will be injected into this template
        titleTemplate: 'Martin Heinz - %s',
    },
};
</script>

<style>
    body {
        max-width: 72rem;
        margin: 0;
        height: 100%;
        background-color: #1d1f21;
        color: #c9cacc;
        font-weight: 400;
        font-size: 14px;
        font-family: "Menlo", "Meslo LG", monospace;
        line-height: 1.725;
        text-rendering: geometricPrecision;
        flex: 1;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        padding-right: 2rem;
        padding-left: 2rem;
    }
</style>
