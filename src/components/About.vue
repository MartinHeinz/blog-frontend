<template>
    <div class="column">
        <h1>About Me</h1>
        <p>My name is Martin Heinz and I'm a software developer/DevOps engineer, currently working at IBM.
            You can find me on
            <a class="no-underline" href="https://github.com/MartinHeinz" target="_blank">
            <v-hover>
                <v-icon @mouseover="next_active = true" @mouseout="next_active = false"
                        slot-scope="{ hover }"
                        :class="`${hover? 'icon-active': 'icon-inactive'}`">fab fa-github</v-icon>
            </v-hover>
            </a>
            or on
            <a class="no-underline" href="https://www.linkedin.com/in/heinz-martin" target="_blank">
            <v-hover>
                <v-icon @mouseover="next_active = true" @mouseout="next_active = false"
                        slot-scope="{ hover }"
                        :class="`${hover? 'icon-active': 'icon-inactive'}`">fab fa-linkedin</v-icon>
            </v-hover>
            </a>
            </p>
    </div>
</template>

<script>
export default {
    name: 'About',
};
</script>

<style>
    .custom-btn::before {
        color: transparent
    }

    .custom-btn:hover {
        color: #d480aa;
        min-width: 0;
    }

    .no-underline {
        background-image: none !important;
    }

</style>
