import Vue from 'vue'
import App from './App.vue'
// import {mixin} from './mixin'

Vue.config.productionTip = false
// Vue.mixin(hunhe)		// 全局混合引入
// Vue.mixin(hunhe2)	// 全局混合引入

new Vue({
  render: (h) => h(App),
}).$mount('#app')
