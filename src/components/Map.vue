<template>
<GmapMap
style="width:100%;height:600px"
:center="center"
:zoom="18"
:options="{
  disableDefaultUI: true
 }"
>
  <GmapMarker
  :position="center"
  />
</GmapMap>
    
</template>

<script>

    export default {
        name: 'Map',
       props: {
         center: {
           type: Object,
           default: {}
         },
         lat: {
           type:Number,
           default: 0
         },
         lng: {
           type:Number,
           default: 0
         },
       }
  
    }
</script>

<style lang="scss" scoped>

</style>