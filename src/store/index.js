import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CART: [],
    SUM_CART: 0
  },
  getters: {
    CART(state) {
      return state.CART
    },
    SUM_CART(state) {
      return state.SUM_CART
    }
  },
  mutations: {
    SET_CART: (state, product) => {
      state.CART.push(product)
    },
    ADD_SUM: (state, sum) => {
      state.SUM_CART += sum
    },
    REDUCE_SUM: (state, sum) => {
      state.SUM_CART -= sum
    }
  },
  actions: {
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    ADD_SUM({commit}, sum) {
      commit('ADD_SUM', sum)
    },
    REDUCE_SUM({commit}, sum) {
      commit('REDUCE_SUM', sum)
    }
  },
  modules: {
  }
})
