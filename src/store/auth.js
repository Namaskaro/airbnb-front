import {apolloClient} from '../main'

import {SIGNUP_USER} from '../graphql/mutations/createAccount.gql'

export default {
  state: {
    user: null,
    loading: false,
    error: null,
    isLoggedIn: false
  },
  getters: {
    user: state => state.user,
    loading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setError: (state, payload) => {
      state.error = payload
    }
  },
  actions: {
    signupUser: ({commit}, payload) => {
      commit('setLoading', true)
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({data}) => {
          commit('setLoading', false)
          // localStorage.setItem('token', data.signupUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
        })
        .catch(err => {
          commit('setLoading', false)
          commit('setError', err)
          console.error(err)
        })
    }
  }
}
