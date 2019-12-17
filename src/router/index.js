import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Blog from '@/components/Blog.vue';
import PostListPage from '@/components/PostListPage.vue';
import Contact from '@/components/Contact.vue';
import PostEditor from '@/components/PostEditor.vue';
import NotFound from '@/components/NotFound.vue';
import SubscribePage from '@/components/SubscribePage.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/blog/:id', component: Blog },
        { path: '/posts/', component: PostListPage },
        { path: '/contact', component: Contact },
        { path: '/subscribe', component: SubscribePage },
        { path: '/editor', component: PostEditor },
        { path: '/404', component: NotFound },
        { path: '*', redirect: '/404' },
    ],
});

export default router;
