<template>
  <div id="app">
    <app-header v-if="loggedIn"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './components/shared/Header.vue'
  export default {
    components: {
      AppHeader
    },
    computed: {
        loggedIn() {
            return this.$store.getters.authCheck;
        }
    }
  }
</script>
