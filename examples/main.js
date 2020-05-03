import Vue from 'vue'
import App from './App.vue'
import pagesIndex from '../packages/index.js'
Vue.use(pagesIndex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
