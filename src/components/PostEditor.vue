<template>
<div class="content">
    <v-textarea name="post" v-model="data" rows="30" cols="130" placeholder="Insert Blog Post..."></v-textarea>
    <component :is="result"></component>
</div>
</template>

<script>
export default {
    name: 'PostEditor',
    data() {
        return {
            data: '',
        };
    },
    computed: {
        result() {
            return {
                template: `<div>${this.data}</div>`,
            };
        },
    },
};
</script>

<style scoped>
    div {
        margin: auto;
    }
</style>
