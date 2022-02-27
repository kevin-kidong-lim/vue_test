import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
// import VueVirtualScroller from 'vue-virtual-scroller';

/* Theme variables */
import './theme/variables.css';
import { VueWrapper } from '@vue/test-utils';
import { store } from './store/store';
// import Vuex from 'vuex';
// import Vue from 'vue';

// Vue.useAttrs(Vuex);
// import 'es6-promise/auto'

const app = createApp(App)
  .use(IonicVue)
  .use(store)
  .use(router);

  // use(VueVirtualScroller); 
  
router.isReady().then(() => {
  app.mount('#app');
});