import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 elementui 组件
import './plugins/element'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
