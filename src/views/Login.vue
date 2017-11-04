<template>
  <section class="container-fluid login">
    <div class="row justify-content-center align-items-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 login__form">
        <h1>alfrek</h1>
        <h2>Researcher Portal</h2>
        <div class="input-group">
          <input id="email" v-model="email" type="email">
          <label for="email">Email</label>
        </div>
        <div class="input-group">
          <input id="password" v-model="password" type="password">
          <label for="password">Password</label>
        </div>
        <alert type="error" :visible="hasErrors">{{ error }}</alert>
        <v-button @click="login" type="success" :disabled="disabled">Log in</v-button>
        <small>Not a member yet? Register <router-link to="/register">here</router-link>!</small>
      </div>
    </div>
  </section>
</template>
<script>
  import axios from 'axios';
  import VButton from '../components/Button.vue'
  import Alert from '../components/Alert.vue'
  export default {
    data() {
      return {
        email: "",
        password: "",
        hasErrors: false,
        error: ''
      }
    },
    methods: {
        login() {
          axios.post('http://localhost:5000/account/login', {"email": this.email, "password": this.password })
            .then(res => {
                this.$store.dispatch('SET_TOKEN', res.data.token);
                this.$store.dispatch('GET_USER').then(() => {
                    this.$store.dispatch('AUTHENTICATED');
                    this.$router.push({ name: 'dashboard' });
                });
            })
            .catch(error => {
                this.password = '';
                this.hasErrors = true;
                this.error = error.request.response;
            })
        }
    },
    computed: {
        disabled() {
            return !(this.email && this.password);
        }
    },
    components: {
        VButton,
        Alert
    }
  }
</script>
