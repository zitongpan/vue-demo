<template>
  <div
    class="home"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="100"
  >
    <ul>
      <li class="mb5" v-for="(item, index) in results" :key="index">
        <a :href="item.url" target="view_window">
          <div class="card pr">
            <img class="img" v-lazy="item.images?item.images[0]+'?imageView2/0/w/200':null">
            <div class="card-content">
              <div class="card-content-bottom clearfix f_white">
                <div class="desc tl mb5 mt10 textoverflow">{{item.desc}}</div>
                <div class="who fl">{{item.who}}</div>
                <div class="time fr">{{item.createdAt.slice(0,10)}}</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div v-if="results.length === 0 && !showLoading" class="tc f_9">
      暂无数据
    </div>
  </div>
</template>

<script>
import api from '../api/api';

export default {
  name: 'ios',
  created() {},
  data() {
    return {
      results: [],
      index: 1,
      busy: false,
    };
  },
  methods: {
    async getPic() {
      const {
        data: { results: data, error },
      } = await api.getIosPic(this.index);
      if (!error) {
        this.busy = false;
        this.results = this.results.concat(data);
      }
    },
    loadMore() {
      this.busy = true;
      this.getPic();
      this.index++;
    },
  },
  computed:{
    showLoading(){
      return this.$store.state.loadingShow;
    }
  }
};
</script>
<style lang="stylus" scoped>
.home
  ul
    padding 10px

    li
      width 100%
      height 200px
      border-radius 5px
      min-height auto
      overflow hidden

      a
        display block
        height 100%

        .card-content-bottom
          position absolute
          width 100%
          bottom 0
          background rgba(0, 0, 0, 0.3)
          height 60px
          padding 0 15px
          box-sizing border-box

        .card
          height 100%
          width 100%
          text-align center

        img
          display inline-block
          position absolute
          width 100%
          height 200px
          object-fit none
          left 0px
          top 0px
</style>
