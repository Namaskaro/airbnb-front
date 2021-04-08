<template>
    <div v-if="home">
        <div>
            <img v-for="image in home.images" :src="image" :key="image" alt="">
        </div>
        <h1>{{home.title}}</h1>
        {{home.description}}
        <Map
        :center="center"
        map-type-id="terrain"
        >
        <GmapMarker
        :position="center"
        :clickable="true"
        />
        </Map>
        <div ref="map">
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Map from '@/components/Map'
import {map,showMap} from '@/plugins/maps.plugin'
    export default {
        components: {
            Map
        },
        data() {
            return {
                home: {}
            }
        },
        computed: {
            ...mapGetters(['homes']),
            center() {
                return {
                    lat: this.home._geoloc.lat,
                    lng: this.home._geoloc.lng,
                }
            }
        },
        created() {
            const home = this.homes.find((home) => home.objectID == this.$route.params.id)
            this.home = home
        },
       
    }
</script>

<style lang="scss" scoped>

</style>