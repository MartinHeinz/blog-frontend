import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Blog from '../components/Blog.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/blog/:id', component: Blog },
        // { path: '/contact', component: 'Contact' },
    ],
});
