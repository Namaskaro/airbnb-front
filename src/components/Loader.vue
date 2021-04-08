<template>
  <div id="overlay">
    <!-- <atom-spinner :animation-duration="1000" :size="160" :color="'#ff5a5f'" /> -->
    <breeding-rhombus-spinner
      :animation-duration="2000"
      :size="65"
      color="#ff5a5f"
    />
  </div>
</template>

<script>
// To use minified css and js files instead of .vue single file components:
// import 'epic-spinners/dist/lib/epic-spinners.min.css'
// import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'

import {BreedingRhombusSpinner} from 'epic-spinners'
export default {
  components: {
    BreedingRhombusSpinner
  }
}
</script>

<style scoped>
#overlay {
  position: fixed; /* Sit on top of the page content */
  display: flex; /* Hidden by default */
  justify-content: center;
  align-items: center;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
</style>
