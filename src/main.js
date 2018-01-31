// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import vueTify from 'vuetify'
import vueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(vueFire)
Vue.use(vueTify)
import('vuetify/dist/vuetify.min.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
