<template>
  <div class="h-3/5 flex flex-col items-center mt-60 lg:mt-62">
    <h2
      class="text-gray-800 font-medium text-center subpixel-antialiased text-3xl"
    >
      Login to start
    </h2>
    <div class="w-full max-w-screen-sm flex flex-col items-center px-5">
      <form class="grid gap-3 mt-5 w-full" @submit.prevent="login">
        <input type="text" class="input" placeholder="Email" v-model="email" />
        <input
          type="password"
          class="input"
          placeholder="Password"
          v-model="password"
        />

        <button class="text-white p-3 bg-airbnb rounded-md">
          Login
        </button>
      </form>
      <span class="my-3">Dont have an account?</span>
      <router-link to="/create-account" tag="a" class="text-airbnb"
        >Create account</router-link
      >
    </div>
    <!-- <Loader /> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'
import login from '../graphql/mutations/createAccount.gql'
import Loader from '../components/Loader'
export default {
  components: {
    Loader
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    createAccount() {
      this.$store.dispatch('loginUser', {
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role
      })
      this.$router.push('name: login')
    }
  }
}
</script>
