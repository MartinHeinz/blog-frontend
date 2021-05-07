<template>
    <div id="app">
        <clip-loader id="spinner" :loading="isLoading" :color="color" :size="size"></clip-loader>
        <transition name="fade">
            <router-view v-show="!isLoading"></router-view>
        </transition>
    </div>
</template>

<script>
import axios from 'axios';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import { mapGetters } from 'vuex';
import store from '@/store';

export default {
    name: 'app',
    components: {
        ClipLoader,
    },
    data() {
        return {
            color: '#2bbc8a',
            size: '100px',
        };
    },
    created() {
        axios.interceptors.request.use((config) => {
            store.commit('LOADING', true);
            return config;
        }, (error) => {
            store.commit('LOADING', false);
            return Promise.reject(error);
        });

        axios.interceptors.response.use((response) => {
            store.commit('LOADING', false);
            return response;
        }, (error) => {
            store.commit('LOADING', false);
            return Promise.reject(error);
        });
    },
    computed: {
        ...mapGetters([
            'isLoading',
        ]),
    },
    metaInfo: {
        title: 'Personal Website & Blog',
        titleTemplate: 'Martin Heinz | %s',
    },
};
</script>

<style>
    body {
        max-width: 72rem;
        margin: 0;
        height: 100%;
        background-color: #1d1f21;
        color: #c9cacc;
        font-weight: 400;
        font-size: 14px;
        font-family: 'Oxygen', monospace;
        line-height: 1.725;
        text-rendering: geometricPrecision;
        flex: 1;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        padding-right: 2rem;
        padding-left: 2rem;
    }
    #spinner {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .fade-enter-active {
        transition: opacity 0.6s ease-out;
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-to {
        opacity: 1;
    }
    .fade-move {
        transition: transform 0.6s;
    }
</style>
