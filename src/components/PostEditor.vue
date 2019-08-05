<template>
<div class="content">
            <v-textarea name="post" v-model="result" rows="30" cols="130" aria-placeholder="Insert Blog Post..."></v-textarea>
            <p v-html="result"></p>
</div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        result: String,
    },
};
</script>

<style scoped>
    div {
        margin: auto;
    }
</style>
