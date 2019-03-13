// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueLazyload from 'vue-lazyload';
import { VLazyImagePlugin } from "v-lazy-image";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'





library.add(fas, fab, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VLazyImagePlugin);

Vue.use(VueLazyload, {
 preLoad: 1.3, // 事前ロードする高さの割合指定
 attempt: 1 // ロード失敗した時のリトライの上限指定
});

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
