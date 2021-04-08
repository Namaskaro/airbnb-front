<template>
  <div class="search">{{this.$route.query}}
  <div v-for="home in homes" :key="home.objectID">
            {{home.title}}
        </div>
  </div>
  
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default { 
  name: 'SearchResults',
  data() {
    return {
      // homes: data.json.hits,
      label: this.query.label,
      lat: this.query.lat,
      lng: this.query.lng
    }
  },
  computed: {
    ...mapGetters(['homes','query']),
    
  },
  methods: {
     ...mapActions({getPropertyByLocation:  'getPropertyByLocation'}),
  },
  
  mounted() {
   this.getPropertyByLocation()
    
  }
}

</script>