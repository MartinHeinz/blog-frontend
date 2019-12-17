<template>
    <div class="content">
        <h1>Subscribe to...</h1>
        <div id="cols" class="row">
            <div class="column">
                <h2><v-icon>fas fa-paper-plane</v-icon> Mailing List!</h2>
                <!--               envelope-->
                <!--               envelope-open-text-->
                <form
                    id="sub-mail"
                    @submit="checkForm"
                    method="post"
                    novalidate="true"
                >
                    <div v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                            <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
                        </ul>
                    </div>
                    <p class="form-field">
                        <input id="email" type="email" v-model="email" placeholder="E-mail Address">
                    </p>
                    <p class="form-field">
                        <input id="nickname" type="text" v-model="nickname" placeholder="Name (Optional)">
                    </p>
                    <p class="form-field">
                        <input
                            type="submit"
                            value="Submit"
                            disabled
                        >

                        <i style="padding-left: 25px;">Coming soon...</i>
                    </p>
                </form>
            </div>
            <div class="column">
                <h2><v-icon>fas fa-rss</v-icon> RSS Feed!</h2>
                <p>
                    RSS Feed for my blog posts is available <a :href="`https://${this.getHost()}/rss`">here</a>.
                </p>
            </div>
        </div>
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
    name: 'SubscribePage',
    components: {
        BaseFooter,
    },
    data() {
        return {
            email: '',
            nickname: '',
            errors: [],
        };
    },
    methods: {
        getHost() {
            return process.env.VUE_APP_API_URL;
        },
        /* eslint consistent-return: 0 */
        checkForm(e) {
            this.errors = [];
            if (!this.email) {
                this.errors.push('Email required.');
            }
            else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }
            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        validEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
};
</script>

<style scoped>
    .column {
        float: left;
        width: 50%;
        padding: 10px;
        height: 50%;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    input[type=text], input[type=email] {
        width: 60%;
        padding: 8px 15px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 2px solid #2bbc8a;
        border-radius: 4px;
        background-color: #1d1f21;
        color: white;
    }

    input[type=submit] {
        width: 30%;
        padding: 8px 15px;
        box-sizing: border-box;
        border: 2px solid #2bbc8a;
        border-radius: 4px;
        background-color: #2bbc8a;
        color: white;
    }

    input[type=text]:focus, input[type=email]:focus {
        outline: none;
        border: 2px solid #d480aa;
    }

    @media screen and (max-width: 720px) {
        .column {
            text-align: center;
            width: 100%;
        }
        input[type=text], input[type=email] {
            width: 90%;
        }
        .form-field {
            text-align: center;
        }
    }
</style>
