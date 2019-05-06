<template>
  <div id="app">
    <my-header :menus="menus"/>
    <router-view/>
    <loading v-show="loadingShow"/>
  </div>
</template>
<script>
import myHeader from '@/components/header.vue';
import loading from '@/components/loading.vue';

export default {
  name: 'app',
  components: {
    myHeader,
    loading,
  },
  data() {
    return {
      menus: [
        {
          name: '前端',
          path: '/home',
        },
        {
          name: 'ios',
          path: '/ios',
        },
        {
          name: 'android',
          path: '/android',
        },
        {
          name: '今日推荐',
          path: '/about',
        },
      ],
    };
  },
  created() {},
  computed: {
    loadingShow() {
      return this.$store.state.loadingShow;
    },
  },
};
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  min-width 320px

#nav
  padding 30px

  a
    font-weight bold
    color #2c3e50

    &.router-link-exact-active
      color #42b983
</style>
