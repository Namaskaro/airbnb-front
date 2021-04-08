import getHomesByLocationApi from '../api/property'
import axios from 'axios'
const state = {
  query: null,
  isLoading: false,
  error: null
}
const getters = {
  propertyTypes: state => state.propertyTypes,
  query: state => state.query
}

const mutations = {
  getPropertyByLocationStart(state) {
    state.query = null
    state.isLoading = true
  },
  getPropertyByLocationSuccess(state, query) {
    state.isLoading = false
    state.query = query
  },
  getPropertyByLocationFailure(state) {
    state.isLoading = false
  }
}

const actions = {
  async getPropertyByLocation({commit}) {
    try {
      const appId = 'ML2ZRMDKHV'
      const apiKey = '6b38c12a01a7f377c600b7eb9bb610d0'
      const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId
      }
      return await axios
        .post(`https://ML2ZRMDKHV-dsn.algolia.net/1/indexes/homes/query`, {
          headers,
          body: JSON.stringify({
            // aroundLatLng: `${lat},${lng}`,
            hitsPerPage: 10,
            attributesToHighlight: []
          })
        })

        // // commit('getPropertyByLocationStart')
        // getHomesByLocationApi
        //   .getHomesByLocation()
        .then(query => {
          commit('getPropertyByLocationSuccess', query)
          resolve(query)
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
