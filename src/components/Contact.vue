<template>
    <div class="content">
        <h1>Contact</h1>
        <p>You can reach out to me through
            <a class="no-underline" href="https://www.linkedin.com/in/heinz-martin" target="_blank">
                <v-hover>
                    <font-awesome-icon :icon="['fab', 'linkedin']" @mouseover="next_active = true" @mouseout="next_active = false"
                                       slot-scope="{ hover }"
                                       :class="`${hover? 'icon-active': 'icon-inactive'}`"/>
                </v-hover>
            </a> or
            <a class="no-underline" href="https://twitter.com/Martin_Heinz_" target="_blank">
                <v-hover>
                    <font-awesome-icon :icon="['fab', 'twitter']" @mouseover="next_active = true" @mouseout="next_active = false"
                                       slot-scope="{ hover }"
                                       :class="`${hover? 'icon-active': 'icon-inactive'}`"/>
                </v-hover>
            </a>, as well as on my mail address at <code class="inline">martin7.heinz@gmail.com</code>
        </p>
        <BaseFooter :items="[
                {value: 'Home', url: '/'},
                {value: 'Contact', url: '/contact'},
                {value: 'Subscribe', url: '/subscribe'}]">
        </BaseFooter>
    </div>
</template>

<script>
import BaseFooter from '@/components/BaseFooter.vue';

export default {
    name: 'Home',

    components: {
        BaseFooter,
    },
};
</script>

<style scoped>

</style>
