<template>
  <div class="mt-5 md:mt-0 md:col-span-2">
    <form action="#" method="POST">
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-700"
                >Address</label
              >
              <input
                type="text"
                v-model="address"
                placeholder="Enter address"
                class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import geocoder from '../plugins/maps.plugin'
export default {
  data() {
    return {
      address: ''
    }
  }
}
</script>

<style lang="sass" scoped></style>
