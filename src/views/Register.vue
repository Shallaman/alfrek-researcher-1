<template>
  <section class="container-fluid login">
    <div class="row justify-content-center align-items-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 login__form">
        <h1>alfrek</h1>
        <h2>Researcher Portal</h2>

        <div v-if="step === 0" class="register__step">
          <div class="input-group">
            <input v-model="form.firstName" id="first_name" type="text">
            <label for="first_name">First name</label>
          </div>
          <div class="input-group">
            <input v-model="form.lastName" id="last_name" type="text">
            <label for="last_name">Last name</label>
          </div>
          <div class="input-group">
            <input @blur="validateEmail" v-model="form.email" id="email" type="email">
            <label for="email">Email</label>
          </div>
          <alert type="error" :visible="emailError">That is not a valid email</alert>
          <div class="input-group">
            <input v-model="form.password" id="password" type="password">
            <label for="password">Password</label>
          </div>
          <div class="input-group">
            <input @blur="validatePassword" v-model="confirmPassword" id="confirm" type="password">
            <label for="confirm">Confirm password</label>
          </div>
          <alert type="error" :visible="passwordError">{{ errorText }}</alert>
          <v-button @click="nextStep" :disabled="firstPartComplete" type="success">Continue</v-button>
        </div>

        <div v-if="step === 1" class="register__step">
          <div class="input-group">
              <multiselect
                v-model="form.affiliation"
                :options="availableAffiliations"
                :multiple="false"
                :close-on-select="true"
                label="name"
                placeholder=""
              >

              </multiselect>
              <label>Affiliation</label>
          </div>
          <div class="input-group research">
            <input v-model="form.research" id="field" type="text">
            <label for="field">Field of Research</label>
          </div>
          <v-button @click="register" :disabled="secondPartComplete" type="success">Submit</v-button>
        </div>

        <small>Already have an account? Log in <router-link to="/login">here</router-link></small>
      </div>
    </div>
  </section>
</template>
<script>
  import axios from 'axios';
  import VButton from '../components/Button.vue'
  import Alert from '../components/Alert.vue'
  import Multiselect from 'vue-multiselect'
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          affiliation: '',
          research: ''
        },
        confirmPassword: '',
        step: 0,
        emailError: false,
        passwordError: false,
        errorText: '',
        availableAffiliations: [],
      }
    },

    methods: {
      nextStep() {
          if (this.step !== 2) {
              this.step++;
          } else {
              this.step = 0;
          }
      },
      validateEmail() {
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(this.form.email)) {
              this.emailError = true;
          } else {
              this.emailError = false;
          }
      },
      validatePassword() {
          if (this.form.password !== this.confirmPassword) {
              this.passwordError = true;
              this.errorText = "Passwords does not match";
          } else if (this.form.password.length < 7 || /d/.test(this.form.password)) {
              this.passwordError = true;
              this.errorText = "Password needs to be at least 8 characters long and contain a numeric character";
          } else {
              this.passwordError = false;
          }
      },
      getAffiliations() {
          axios.get("http://localhost:5000/resource/affiliations")
            .then(res => {
                this.availableAffiliations = res.data;
            })
            .catch(e => {
                console.log(e);
            })
      },
      register() {
          axios.post("http://localhost:5000/account/register/researcher", this.form)
            .then(res => {
                this.$store.dispatch('SET_TOKEN', res.data.token);
                this.$store.dispatch('GET_USER').then(() => {
                    this.$store.dispatch('AUTHENTICATED');
                    this.$router.push({ name: 'dashboard' });
                });
            })
            .catch(error => {
                console.log(error);
            })
      }
    },

    computed: {
      firstPartComplete() {
        return !(this.form.firstName && this.form.lastName && this.form.email && !this.emailError &&
        this.form.password && this.confirmPassword && (this.form.password === this.confirmPassword));
      },
      secondPartComplete() {
          return !(this.form.affiliation && this.form.research);
      }
    },

    components: {
      Alert,
      VButton,
      Multiselect
    },

    created() {
        this.getAffiliations();
    }
  }
</script>
