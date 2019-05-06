/* eslint-disable global-require */
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload';
import infiniteScroll from 'vue-infinite-scroll';

Vue.use(Element);
Vue.use(infiniteScroll);

Vue.use(VueLazyload, {
  // eslint-disable-next-line global-require
  error: require('../assets/404.png'),
  loading: require('../assets/loading.gif'),
  attempt: 1,
});
