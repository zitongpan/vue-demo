<template>
  <el-container class="header">
    <el-header>
      <el-row>
        <el-col :sm="6" :xs="24" class="logo">
          鲸鱼智能
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
        <el-col tag="ul" :sm="18" :xs="24" :class="{'hide' : showMenu}">
          <router-link tag="li" :to="{name:'home'}" class="cp">首页</router-link>
          <router-link tag="li" :to="{name:'about'}" class="cp">策略</router-link>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>
<script>
export default {
  name: 'myHeader',
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
.header /deep/
  .el-header
    display flex
    line-height 60px
    background #91ddcc
    font-size 16px

    .logo
      span
        display none

    .el-row
      width 100%

      ul.el-col
        display flex
        justify-content flex-end

        li
          padding 0 20px

@media screen and (max-width: 768px)
  .header /deep/
    .el-header
      height auto !important

      .logo
        text-align left

        span
          display block

          &.hide
            display none

      .el-row
        ul.el-col
          line-height 50px
          display none

          &.hide
            display unset
</style>
