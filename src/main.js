import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.use(VueLazyload, {

  loading: require('./assets/images/loading.png')

})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
