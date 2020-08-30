<template>
  <div id="app">
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main id="main"><router-view></router-view></el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/public/Header'
import Footer from './components/public/Footer'

const config = {
  color: "0, 255, 255", // 线条颜色
  pointColor: "255, 0, 255", // 节点颜色
  opacity: 1, // 线条透明度
  count: 100, // 线条数量
  zIndex: 99 // 画面层级
};

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display flex
  align-items center
  justify-content center
  .el-main
    height 815px
  .el-header
      height 60px
      position fixed
      top 0
      left 0
      z-index 99999
      width 100%
      padding 0
      background-color #ffffff
      border-bottom solid 1px #e6e6e6
      box-sizing border-box
  .el-container
    //text-align center
    display flex
    //background-color #f5f5f5
</style>
