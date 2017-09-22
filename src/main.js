// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import wysiwyg from 'vue-wysiwyg'




Vue.config.productionTip = false
Vue.use(wysiwyg, {});

import 'vue-wysiwyg/dist/vueWysiwyg.css'

require('./assets/sass/app.scss');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
