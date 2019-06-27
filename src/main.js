import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import router from './router';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import moment from 'moment';
import Vuetify from 'vuetify';

import App from './App.vue';

import './assets/style.css';

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

Vue.use(Vuetify, {
    iconfont: 'fa',
});

const SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

Vue.filter('formatDate', value => moment(String(value)).format('MM/DD/YYYY hh:mm'));

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
