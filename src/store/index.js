import Vue from 'vue'
import Vuex from 'vuex'
import property from './property'
import homes from './homes'
import auth from './auth'
import countries from './countries'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    property,
    homes,
    auth,
    countries
  }
})
