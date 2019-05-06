import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import ios from '../views/ios.vue';
import android from '../views/android.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home,
    },
    {
      path: '/home',
      name: '前端',
      component: Home,
    },
    {
      path: '/ios',
      name: 'ios',
      component: ios,
    },
    {
      path: '/android',
      name: 'android',
      component: android,
    },
    {
      path: '/about',
      name: '今日推荐',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
  ],
});
