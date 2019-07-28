<template>
    <article class="project-item">
        <figure class="left">
            <a class="no-underline" :href="url">
            <img :src="src" :alt="name"  height="150" width="250">
            </a>
        </figure>
        <section class="right">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
            <div class="project-tag">
                <v-icon>fas fa-tag</v-icon>
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

</style>
