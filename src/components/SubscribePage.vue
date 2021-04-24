<template>
    <div class="content">
        <h1>Subscribe to...</h1>
        <div id="cols" class="row">
            <div class="column">
                <h2><font-awesome-icon icon="paper-plane"/> Mailing List!</h2>
                <!--               envelope-->
                <!--               envelope-open-text-->
                <form
                    id="sub-mail"
                    v-on:submit="submitForm"
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
                        <input
                            type="submit"
                            value="Submit"
                        >
                    </p>
                    <div v-if="subscribed === 'success'">
                        <b>Thanks! You will receive e-mail with confirmation link shortly.</b>
                    </div>
                    <div v-else-if="subscribed === 'fail'">
                        <b>Something went wrong...</b>
                    </div>
                    <div v-else>
                    </div>
                </form>
            </div>
            <div class="column">
                <h2>
                    <font-awesome-icon icon="rss"/> RSS Feed!</h2>
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
import { API_URL } from '@/common/config';
import BaseFooter from '@/components/BaseFooter.vue';
import axios from 'axios';

export default {
    name: 'SubscribePage',
    components: {
        BaseFooter,
    },
    data() {
        return {
            email: '',
            errors: [],
            subscribed: '',
        };
    },
    methods: {
        getHost() {
            return process.env.VUE_APP_API_URL;
        },
        checkForm() {
            this.errors = [];
            this.subscribed = '';
            if (!this.email) {
                this.errors.push('Email required.');
            }
            else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }
            if (!this.errors.length) {
                return true;
            }
            return false;
        },
        validEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        subscribe() {
            axios.post(`${API_URL}newsletter/subscribe/`, {
                email: this.email,
            }).then((response) => {
                if (response.status === 200) {
                    this.subscribed = 'success';
                }
                else {
                    this.subscribed = 'fail';
                }
            }, () => {
                this.subscribed = 'fail';
            });
        },
        submitForm(e) {
            if (this.checkForm()) {
                this.subscribe();
            }
            e.preventDefault();
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
