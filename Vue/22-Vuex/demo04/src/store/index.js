import Vue from 'vue' //引入Vue核心库
import Vuex from 'vuex' // 引入Vuex

Vue.use(Vuex) // 应用Vuex插件

// 准备actions对象——用于响应组件中的动作
// 包含多个方法: 触发mutation调用, 间接更新state
// 一个方法就是一个action
// action中可以有逻辑代码和异步代码
// action由组件来触发调用: this.$store.dispatch('actionName')
const actions = {
  jia(context, value) {
    context.commit('JIA', value) //开发中一般大写
  },
  jian(context, value) {
    context.commit('JIAN', value)
  },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  },
}

// 准备mutations对象——用于操作数据（即修改state中的数据）
// 包含多个方法: 能直接更新state
// 一个方法就是一个mutation
// mutation只能包含更新state的同步代码, 也不会有逻辑
// mutation由action触发调用: commit('mutationName')
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
}

// 准备state对象——用于存储数据
//state 对象
//类似于data
const state = {
  sum: 0,
  school: 'QFNU',
  subject: '前端',
}

// 准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  },
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
