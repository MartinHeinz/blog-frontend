<template>
    <div>
        <h1>About Me</h1>
        <p>My name is Martin Heinz and I'm a software developer/DevOps engineer. I'm from Slovakia, living in Bratislava and currently working at IBM.
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
            </a>.
            </p>

        <p>
            On this page you can find some information about me and a few blog posts I wrote. Most of them are about topics that I'm most interested in,
            such as cryptography, serverless and distributed technologies, or about programming languages like Python or Go. I like to read a lot books,
            so you might also find my opinions or review of some them here.
        </p>

        <p>
            I'm also posting my blog posts on <a href="https://dev.to/martinheinz">DEV.to</a> and <a href="https://medium.com/@martin.heinz">Medium</a>,
            so you can find them there as well.
        </p>

        <div id="cols" class="row">
            <div class="column">
                <h2><v-icon>fas fa-heartbeat</v-icon> Life so far...</h2>
                <ul class="about-list">
                    <li>Breathing since 1994</li>
                    <li>Started studying CS in 2014</li>
                    <li>Got Bachelors in 2017</li>
                    <li>Started working at IBM in 2018</li>
                    <li>Got Masters with honours in 2019</li>
                </ul>
            </div>
            <div class="column">
                <h2><v-icon>fas fa-fire</v-icon> Passionate about...</h2>
                <ul class="about-list">
                    <li>Food</li>
                    <li>Books</li>
                    <li>Weight Lifting</li>
                    <li>Coding</li>
                    <li>Music</li>
                </ul>
            </div>
            <div class="column">
                <h2><v-icon>fas fa-lightbulb</v-icon> Thinking about...</h2>
                <ul class="about-list">
                    <li>Cloud-Native Apps</li>
                    <li>Cryptography</li>
                    <li>Testing</li>
                </ul>
            </div>
        </div>
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

    /* Create two equal columns that floats next to each other */
    .column {
        float: left;
        width: 33%;
        padding: 10px;
        height: 50%;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .about-list {
        padding-left: 12px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        #cols .column {
            width: 100%;
        }
    }
</style>
