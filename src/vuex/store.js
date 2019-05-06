import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  loadingShow: false,
};
const mutations = {
  UPDATA_LOADING(obj, status) {
    state.loadingShow = status;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
