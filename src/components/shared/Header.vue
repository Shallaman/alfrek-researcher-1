<template>
  <header class="site_header">
    <router-link to="/" class="site_logo">
      alfrek
    </router-link>
    <nav class="header_navigation">
      <ul>
        <li>
          <router-link to="/editor">New Solution</router-link>
          <router-link to="/">Solutions</router-link>
          <router-link to="/">Account</router-link>
          <a @click="logout">Log out</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
  import axios from 'axios';
  export default {
      methods: {
          logout() {
            axios.post('http://localhost:5000/account/logout')
              .then(() => {
                this.$store.dispatch('LOGOUT');
                this.$router.push({ name: 'login' });
              })
          }
      }
  }
</script>
