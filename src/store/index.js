import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import config from '../config';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    auth: false,
    title: config.title,
    intended: config.intended,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      axios.defaults.headers.common['Authorization'] = "Bearer " + state.token;
    },
    AUTHENTICATED(state) {
      state.auth = true;
    },
    SET_TITLE(state, title) {
      state.title = title;
    },
    SET_INTENDED(state, route) {
      state.intended = route;
    },
    LOGOUT(state) {
      axios.defaults.headers.common['Authorization'] = "";
      state.user = null;
      state.token = null;
      state.auth = false;
      state.intended = config.intended;
    }
  },

  actions: {
    GET_USER({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/account/user')
          .then(({ data }) => {
            commit('SET_USER', data);
            resolve(data);
          })
          .catch(error => {
            reject(error.response);
          });
      });
    },
    SET_TOKEN({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    AUTHENTICATED({ commit }) {
      commit('AUTHENTICATED');
    },
    SET_TITLE({ commit }, title) {
      commit('SET_TITLE', `${title} · ${config.title}`);
    },
    SET_INTENDED({ commit }, route) {
      commit('SET_INTENDED', route);
    },
    LOGOUT({ commit }) {
      commit('LOGOUT');
    }
  },

  getters: {
    userCheck: state => state.user !== null,
    authCheck: state => state.auth,
    getToken: state => state.token
  }
});
