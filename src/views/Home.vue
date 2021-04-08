<template>
  <div class="app">
    <header class="app-header">
    <div class="app-search">
     <input type="text" ref="citySearch" @changed="getResultBySearch">
   <input type="text" class="datepicker" placeholder="Check in">
   <input type="text" class="datepicker" placeholder="Check out">
   <button>
     <img src="../assets/images/icons/search.svg" alt="">
   </button>
    </div>
    <div class="app-user-menu">
      <img src="../assets/images/icons/house.svg" alt="">
      <div class="name">Host</div>
      <img src="../assets/images/user.jpg" alt="" class="avatar">
    </div>
      
    </header>
    
    <div v-for="home in homes" :key="home.objectID" style="display:flex;width:100%">
      <img  :src="home.images[0]"  alt="" style="width:400px;height:400px">
      <router-link :to="{name: 'Property', params:{id:home.objectID}}">
        {{home.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
import makeAutoComplete from '../plugins/maps.plugin.js'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import {mapGetters,mapActions} from 'vuex'
export default { 
  name: 'Home',
  components: {
    VueGoogleAutocomplete
  },
  data:()=>({
  
  }),
  computed: {
    ...mapGetters(['homes'])
  },
  methods: {
    ...mapActions({
      getPropertyByLocation:  'getPropertyByLocation'
    }),
    getResultBySearch(event) {
      const place = event.detail
    if(!place.geometry) return
      this.$router.push({
      name: 'SearchResults',
      query: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        label: this.$refs.citySearch.value,
      },

    })
    }

  },
  mounted() {
    this.homes
    makeAutoComplete(this.$refs.citySearch)
  }
}
</script>
