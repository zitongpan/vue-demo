<template>
  <div class="about">
    <div v-for="(item, index) in recommendList" :key="index">
      <h1 class="tl">{{item.title}}</h1>
      <div v-html="item.content"></div>
    </div>
    <div v-if="recommendList.length === 0 && !showLoading">暂无数据</div>
  </div>
</template>
<script>
import api from '../api/api';
export default {
  name: 'recommend',
  conpoment: {},
  data() {
    return {
      title: '',
      content: '',
      recommendList: [],
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    async getContent() {
      const {
        data: { results: data, error },
      } = await api.getContent();
      if (!error) {
        this.recommendList = data;
      }
    },
  },
  computed: {
    showLoading() {
      return this.$store.state.loadingShow;
    },
  },
};
</script>
<style lang="stylus" scoped>
.about
  padding 10px

  >>> div
    text-align center

    h1
      font-size 18px

    img
      display inline-block
      max-width 100%

    a
      text-align left
</style>


