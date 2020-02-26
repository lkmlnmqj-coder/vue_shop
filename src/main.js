import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';
// 导入 elementui 组件
import './plugins/element'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
