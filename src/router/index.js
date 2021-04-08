import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Home from '../views/Home'
import Property from '../views/Property'
import SearchResults from '../views/SearchResults'
import CreateAccount from '../views/CreateAccount'
import CreateProperty from '../views/CreateProperty'
import Geocoder from '../views/Geocoder'
import Login from '../views/Login'
import Date from '../views/Date'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Home
  },
  {
    path: '/property/:id',
    name: 'Property',
    component: Property
  },
  {
    path: '/search/result',
    name: 'SearchResults',
    component: SearchResults
  },
  {
    path: '/create-account',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path: '/create-property',
    name: 'CreateProperty',
    component: CreateProperty
  },
  {
    path: '/geo',
    name: 'Geocoder',
    component: Geocoder
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/date',
    name: 'date',
    component: Date
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
