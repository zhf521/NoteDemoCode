import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器（不写文件名，就默认找router目录下的index.js）
import router from './router'

Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
//通过 router 配置参数注入路由
// 从而让整个应用都有路由功能
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount('#app')
