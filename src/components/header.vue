<template>
  <div class="h60">
    <el-container class="header" tag="div" :class="{'rightIn': showMenu}">
      <el-header>
        <el-row>
          <el-col :sm="6" :xs="24" class="logo pr">
            鲸鱼智能
            <span class="pa f12 title">{{title}}</span>
            <span
              class="iconfont fr f_6 cp"
              :class="{'hide' : showMenu}"
              @click="showMenu = !showMenu"
            >&#xe602;</span>
            <span
              class="iconfont fr f_6 cp"
              :class="{'hide' : !showMenu}"
              @click="showMenu = !showMenu"
            >&#xe631;</span>
          </el-col>
          <el-col tag="ul" :sm="18" :xs="24">
            <router-link
              tag="li"
              class="cp"
              v-for="(menu, index) in menus"
              :key="index"
              :to="menu.path"
            >
              <span @click="showMenu = !showMenu">{{menu.name}}</span>
            </router-link>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'myHeader',
  data() {
    return {
      showMenu: false,
      title: this.$router.history.current.name,
    };
  },
  props: {
    menus: Array,
  },
  created() {
    this.setTit();
  },
  methods: {
    setTit() {
      this.$router.beforeEach((to, from, next) => {
        this.title = to.name
        next();
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.h60
  height 60px

.header /deep/
  width 100%

  .el-header
    display flex
    width 100%
    line-height 60px
    background #91ddcc
    font-size 16px

    .logo
      padding 0 20px
      font-size 22px
      font-family '幼圆'

      span
        display none

      .title
        width 100px
        text-align center
        top 0
        left 50%
        margin-left -50px
        font-family '微软雅黑'
        line-height 66px
        height 60px

    .el-row
      width 100%

      ul.el-col
        display flex
        justify-content flex-end

        li
          padding 0 20px

          &.router-link-active
            background #55dcb7b5

          >span
            display block

@media screen and (max-width: 768px)
  .rightIn
    transform translateX(-60%) !important

    &.header
      height 100vh
      background rgba(0, 0, 0, 0.3)
      position fixed
      z-index 9

  .header /deep/
    position fixed
    transition all 0.3s
    transform translateX(0)
    z-index 9

    .el-header
      padding 0

      .logo
        text-align left

        span
          display block

          &.hide
            display none

      .el-row
        ul.el-col
          line-height 50px
          position absolute
          width 60%
          background #22262a
          color #ddd
          height 100vh
          display unset

          li
            padding 0
</style>
