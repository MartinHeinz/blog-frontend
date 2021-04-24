<template>
    <article class="project-item">
        <figure class="left">
            <a class="no-underline" :href="url">
            <img :src="src" :alt="name" loading="lazy" height="150" width="250">
            </a>
        </figure>
        <section class="right">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
            <div class="project-tag">
                <font-awesome-icon icon="tag"/>
                <BaseTag class="no-underline" v-for="tag in tags"
                     v-bind:url="tag.url"
                     v-bind:name="tag.name"
                     v-bind:key="tag.key">
                </BaseTag>
            </div>
        </section>
    </article>
</template>

<script>
import BaseTag from '@/components/BaseTag.vue';

export default {
    name: 'Project',
    components: {
        BaseTag,
    },
    props: {
        name: String,
        url: String,
        description: String,
        src: String,
        tags: Array,
    },
};
</script>

<style scoped>

    .project-item {
        display: flex;
    }
    .left {
        flex: 0 0 20%;
        margin-left: auto;
    }
    .right {
        flex: 1;
    }

    @media (min-width: 320px) and (max-width: 600px) {
        .project-item {
            flex-direction: column;
        }
        .right {
            order: 1;
        }
        .left {
            order: 2;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
