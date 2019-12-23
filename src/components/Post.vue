<template>
    <div>
        <article>
            <div class="content">
                <component :is="currentPostText"></component>
            </div>
        </article>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavFooter from '@/components/NavFooter.vue';

export default {
    name: 'Post',
    components: {
        NavFooter,
    },
    computed: {
        ...mapGetters([
            'currentPostText',
            'currentPostLDJson',
        ]),
    },
    methods: {
        ...mapActions([
            'fetchPostById',
        ]),
    },
    metaInfo() {
        return this.currentPostLDJson;
    },
};
</script>

<style>

    span {}

</style>
