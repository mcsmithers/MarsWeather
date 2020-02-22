import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  // Message to display on banner
    bannerMessage: '',
    // Types: Error, Info, or Success
    bannerType: 'Info'
  },
  getters: {
    getBannerMessage: (state) => {
      return state.bannerMessage
    },
    getBannerType: (state) => {
      return state.bannerType
    }
  },
  mutations: {
    setBannerMessage: (state, payload) => {
      state.bannerMessage = payload
    },
    setBannerType: (state, payload) => {
      state.bannerType = payload
    }
  },
  actions: {
    setBanner: (context, payload) => {
      context.commit('setBannerMessage', payload.message)
      context.commit('setBannerType', payload.type)
    }
  },
  modules: {
  }
})
