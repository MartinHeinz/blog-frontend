import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: 'Home' },
        { path: '/blog/:id', component: 'Blog' },
        // { path: '/contact', component: 'Contact' },
    ],
});
