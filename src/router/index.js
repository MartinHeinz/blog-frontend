import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Blog from '../components/Blog.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/blog/:id', component: Blog },
        // { path: '/contact', component: 'Contact' },
        { path: '/404', component: NotFound },
        { path: '*', redirect: '/404' },
    ],
});
