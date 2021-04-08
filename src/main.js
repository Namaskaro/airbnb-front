import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/tailwind.css'
import './assets/scss/app.scss'
import map from './plugins/maps.plugin'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

export const apolloClient = new ApolloClient({
  uri: 'http://127.0.0.1:3000/graphql'
})

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCiNKAJhDqe00qB5kKoWwqUZqsldEVJGHw',
    libraries: 'places',
    disableDefaultUI: true
  },

  installComponents: true
})
Vue.config.productionTip = false
Vue.use(VueGeolocation)
new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
