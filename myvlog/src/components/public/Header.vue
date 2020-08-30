<template>
    <div class="header">
        <div>
            <div class="logo-site-title">
                <a href="/" class="brand" rel="start" style="opacity: 1;">
                <span class="logo-line-before"><i class="" style="transform: translateX(100%);"></i></span>
                <span class="site-title" style="opacity: 1; top: 0px;">Mr.Zhan<span class="is_show">个人博客</span></span>
                <span class="logo-line-after"><i class="" style="transform: translateX(-100%);"></i></span>
                </a>
            </div>
        </div>
        <el-menu  menu-trigger="click" :router=true :class="menu_show" class="d-flex header-ul  animated fadeInDown" mode="horizontal" type="flex">
            <nav>
                <el-menu-item index="/"><i class="iconfont icon-home">首页</i></el-menu-item>
                <el-menu-item index="/text"><i class="iconfont icon-tags">标签</i></el-menu-item>
                <el-menu-item><i class="iconfont icon-category">分类</i></el-menu-item>
                <el-menu-item><i class="iconfont icon-archive">归档</i></el-menu-item>
                <el-menu-item><i class="iconfont icon-comment">留言板</i></el-menu-item>
                <el-menu-item><i class="iconfont icon-link">友联</i></el-menu-item>
                <el-menu-item><i class="iconfont icon-tool">工具</i></el-menu-item>
                <el-menu-item><i class="iconfont icon-music">音乐站</i></el-menu-item>
                <el-menu-item><i class="iconfont icon-user">关于</i></el-menu-item>
            </nav>
        </el-menu>
    </div>
</template>


<script>
export default {
    name: "Header",
    data(){
        return{
            menu_show:'m-hide'
        }
    }
    
}
</script>

// 使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。
<style lang="stylus" scoped>
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out
}
@keyframes octocat-wave {
  0%, 100% {
    transform: rotate(0)
  }
  20%, 60% {
    transform: rotate(-25deg)
  }
  40%, 80% {
    transform: rotate(10deg)
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}

.header
    width 65%
    display flex
    justify-content center
    margin-bottom 50px
    height auto
    margin 0 auto
    .logo-site-title
        width 25%
    .brand
      position relative
      display inline-block
      color #222
      border-bottom none 
      background none
      padding 2px 2px 1px 20px
      margin 8px auto
      .logo-line-before
        display block
        overflow hidden
        margin 0 auto
        width 75%
        i
          position relative
          display block
          height 2px
          background #222
          left -100%
      .logo-line-after 
        display block
        overflow hidden
        margin 0 auto
        width 75%
        i
          position relative
          display block
          height 2px
          background #222
          right -100%
      .site-title 
        display inline-block
        vertical-align top
        line-height 36px
        font-size 24px
        font-weight normal
        font-family 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif
        position relative
        font-size 22px
        font-weight bolder
        .is_show
          display none
    .el-autocomplete
      padding 10px
    .header-ul
      width 83%
      border-bottom none 
      display flex
      .logo
        text-align left
        flex 1 
        font-size 22px
        font-weight bolder
      nav 
        display flex
      
</style>