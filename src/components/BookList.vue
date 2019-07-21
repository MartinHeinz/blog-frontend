<template>
    <section>
        <h1>Learning and Reading</h1>
        <p>These are books I read. My review and opinion about some of them can be found in blog posts.</p>
        <div class="books">
            <BookListItem v-for="item in bookList"
                          v-bind:src="item.src"
                          v-bind:alt="item.alt"
                          v-bind:url="item.url"
                          v-bind:key="item.id">
            </BookListItem>
        </div>
    </section>
</template>

<script>

import BookListItem from '@/components/BookListItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'BookList',
    components: { BookListItem },
    created() {
        this.fetchBooks();
    },
    computed: {
        ...mapGetters([
            'bookList',
        ]),
    },
    methods: {
        ...mapActions([
            'fetchBooks',
        ]),
    },
};
</script>

<style scoped>
    section {
        display: block;
    }

    .books {
        text-align: center;
    }
</style>
