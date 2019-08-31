import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    }
  },

  getters: {
    isAuthenticated (state) {
      return !!state.user
    }
  }
})

export default store
