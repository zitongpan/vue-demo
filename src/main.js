import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/plugins';
import './style.styl';
import store from './vuex/store';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
