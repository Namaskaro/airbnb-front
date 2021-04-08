<template>
  <div class="h-screen flex flex-col items-center mt-10 lg:mt-2">
    <logo />
    <h2 class="text-gray-800 font-medium text-center subpixel-antialiased">
      Add your home,apartments,villa or any type of property. And rent it to
      people from all over the world.
    </h2>
    <div class="w-full max-w-screen-sm flex flex-col items-center px-5">
      <form class="grid gap-3 mt-5 w-full" @submit.prevent="createAccount">
        <input type="text" class="input" placeholder="Name" v-model="name" />
        <input
          type="text"
          class="input"
          placeholder="Country"
          v-model="country"
        />
        <input type="text" class="input" placeholder="State" v-model="state" />
        <input
          type="text"
          class="input"
          placeholder="Address"
          v-model="address"
        />
        <div class="md:flex mb-4">
          <div class="md:flex-1 md:pr-3">
            <label class="block text-gray-600">Bathrooms</label>
            <input
              class="input"
              type="number"
              name="bathrooms"
              v-model="bathrooms"
              placeholder="Number of bathrooms"
            />
          </div>
          <div class="md:flex-1 md:pl-3">
            <label class="block text-gray-600">Bedrooms</label>
            <input
              class="input"
              type="number"
              name="bedrooms"
              v-model="bedrooms"
              placeholder="Number of bedrooms"
            />
          </div>
        </div>
        <label class="block text-gray-600">Choose property type</label>
        <select class="input" v-model="type">
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Room">Room</option>
          <option value="Apartment">Apartment</option>
        </select>
        <label class="typo__label">Please select country</label>
        <select class="input" v-model="selectedCountry">
          <option v-for="c in countries" :key="c">{{ c }}</option>
        </select>
        <label class="typo__label">Please select facilities</label>
        <multiselect
          v-model="value"
          tag-placeholder="Add this as new tag"
          placeholder="Select facilities"
          label="name"
          track-by="name"
          :options="options"
          :multiple="true"
          :taggable="true"
          @tag="addTag"
        ></multiselect>
        <button class="text-white p-3 bg-airbnb">
          Create Property
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import {mapGetters, mapActions} from 'vuex'
import Logo from '../components/Logo'
export default {
  components: {
    Multiselect,
    Logo
  },
  data() {
    return {
      name: '',
      country: '',
      state: '',
      address: '',
      bathrooms: 0,
      bedrooms: 0,
      type: [],
      value: [],
      selectedCountry: '',
      options: [
        {name: 'Coffe machine'},
        {name: 'WI-FI'},
        {name: 'Parking'},
        {name: 'Kitchen'},
        {name: 'TV'},
        {name: 'Safe'}
      ]
    }
  },
  computed: {
    ...mapGetters(['countries']),
    countries() {
      return this.$store.getters.countries
    }
  },
  methods: {
    ...mapActions(['getCountriesData']),
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
