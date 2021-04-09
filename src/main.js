import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faHeartbeat, faFire, faLightbulb, faChevronLeft, faChevronRight, faChevronUp, faRss, faShareAlt, faTag, faBars, faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub, faLinkedin, faTwitter, faReddit, faFacebook, faWhatsapp, faWeibo, faVk,
} from '@fortawesome/free-brands-svg-icons';
import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueHighlightJS from 'vue-highlight.js';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import Vuetify from 'vuetify/lib';
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
import ini from 'highlight.js/lib/languages/ini';
import json from 'highlight.js/lib/languages/json';

// import 'highlight.js/styles/an-old-hope.css';
// import 'highlight.js/styles/darcula.css';
// import 'highlight.js/styles/nord.css';
// import 'highlight.js/styles/vs2015.css';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

import App from '@/App.vue';

import '@/assets/style.css';
import localizableFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';

dayjs.extend(localizableFormat);

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

Vue.component('font-awesome-icon', FontAwesomeIcon); // Register component globally
library.add(
    faHeartbeat, faFire, faLightbulb, faChevronLeft, faChevronRight, faChevronUp, faRss, faShareAlt, faTag, faBars, faPaperPlane,
    faGithub, faLinkedin, faTwitter, faReddit, faFacebook, faWhatsapp, faWeibo, faVk,
); // Include needed icons

dom.i2svg();

Vue.use(Vuetify, {
    iconfont: 'faSvg',
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
        ini,
        json,
    },
});

const SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true,
});

Vue.filter('formatDate', (value) => dayjs(String(value)).format('ll'));

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
