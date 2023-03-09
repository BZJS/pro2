import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import mutation from '@/store/mutation'
import action from '@/store/action'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutation,
  actions: action,
  modules: {
  },
  getters: getters
})
