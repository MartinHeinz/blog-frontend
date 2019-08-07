<template>
    <div>
        <h1>Contact</h1>
        <p>You can reach out to me through
            <a class="no-underline" href="https://www.linkedin.com/in/heinz-martin" target="_blank">
                <v-hover>
                    <v-icon @mouseover="next_active = true" @mouseout="next_active = false"
                            slot-scope="{ hover }"
                            :class="`${hover? 'icon-active': 'icon-inactive'}`">fab fa-linkedin</v-icon>
                </v-hover>
            </a>, as well as on my mail address at <code class="inline">martin7.heinz@gmail.com</code>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style scoped>

</style>
