<template>
  <div class="h-3/5 flex flex-col items-center mt-10 lg:mt-32">
    <h2
      class="text-gray-800 font-medium text-center subpixel-antialiased text-3xl"
    >
      Lets get started
    </h2>
    <div class="w-full max-w-screen-sm flex flex-col items-center px-5">
      <form class="grid gap-3 mt-5 w-full" @submit.prevent="createAccount">
        <input
          type="text"
          class="input"
          placeholder="Username"
          v-model="username"
        />
        <input type="text" class="input" placeholder="Email" v-model="email" />
        <input
          type="password"
          class="input"
          placeholder="Password"
          v-model="password"
        />
        <select class="input" v-model="role">
          <option value="Client">Client</option>
          <option value="Owner">Owner</option>
        </select>
        <button class="text-white p-3 bg-airbnb rounded-md">
          Create Account
        </button>
      </form>
      <span class="my-3">Already have an account?</span>
      <router-link to="/login" tag="a" class="text-airbnb">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      role: ''
    }
  },

  methods: {
    createAccount() {
      this.$store.dispatch('signupUser', {
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role
      })
      this.$router.push({name: 'login'})
    }
  }
}
</script>
