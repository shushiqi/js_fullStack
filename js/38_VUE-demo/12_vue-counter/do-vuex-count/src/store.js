import Vue from 'vue'
import Vuex from 'vuex'

//this.$store.state vue全局实例
Vue.use(Vuex) //启动vue 可插拔

const state = {
  count: 0
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrease(state) {
    state.count--
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// 组件只能跟actions交流
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrease: ({ commit }) => commit('decrease'),
  incrementIfOdd({ commit, state }) {
    // 将组件逻辑放到action中
    // 是否是奇数
    state.count
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 2000)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})