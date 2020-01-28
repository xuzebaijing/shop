import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 按需引入Element-ui
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import './assets/css/global.css'
// 引入icon-font
import './assets/fonts/iconfont.css'
// 引入 axios
import axios from 'axios'
// 配置axios请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
