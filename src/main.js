import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueHighlightJS from 'vue-highlight.js';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import moment from 'moment';
import Vuetify from 'vuetify';
import router from '@/router';
import store from '@/store';
import vueHeadful from 'vue-headful';

// Highlight.js languages (Only required languages)
import python from 'highlight.js/lib/languages/python';
import shell from 'highlight.js/lib/languages/shell';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import go from 'highlight.js/lib/languages/go';
import javascript from 'highlight.js/lib/languages/javascript';
import makefile from 'highlight.js/lib/languages/makefile';
import yaml from 'highlight.js/lib/languages/yaml';
import bash from 'highlight.js/lib/languages/bash';

// import 'highlight.js/styles/an-old-hope.css';
// import 'highlight.js/styles/darcula.css';
// import 'highlight.js/styles/nord.css';
// import 'highlight.js/styles/vs2015.css';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

import App from '@/App.vue';

import '@/assets/style.css';

Vue.config.productionTip = false;

const requireComponent = require.context(
    // The relative path of the components folder
    './components',
    // Whether or not to look in subfolders
    false,
    // The regular expression used to match base component filenames
    /Base[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach((fileName) => {
    // Get component config
    const componentConfig = requireComponent(fileName);

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
            // Gets the file name regardless of folder depth
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, ''),
        ),
    );

    // Register component globally
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig,
    );
});

Vue.component('vue-headful', vueHeadful);

Vue.use(Vuetify, {
    iconfont: 'fa',
});

Vue.use(VueHighlightJS, {
    // Register only languages that you want
    languages: {
        javascript,
        python,
        dockerfile,
        go,
        shell,
        makefile,
        yaml,
        bash,
    },
});

const SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true,
});

Vue.filter('formatDate', (value) => moment(String(value)).format('ll'));

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
