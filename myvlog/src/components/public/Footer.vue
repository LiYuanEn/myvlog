<template>
    <div class="footer animated fadeInUp">
      <div class="footer-main">
        <el-row>
            <span class="copyright">©2020-<span class="copyrightYear">{{curYear}}</span></span>
            <span class="with-love" id="animate"><i class="iconfont icon-heart"></i></span>
            <span class="author" itemprop="copyrightHolder">Mr.lei</span>
            <span class="post-meta-divider">|</span>
            <span class="post-meta-item-icon"><i class="iconfont icon-area-chart"> 站点字数合计:</i></span>
            <span title="站点总字数">171k</span>
        <span class="post-meta-divider">|</span>
        <span><i class="iconfont icon-beian"></i><a href="http://www.miit.gov.cn/" rel="noopener" target="_blank"> 粤ICP备18005467号 </a></span>
        </el-row> 
        <el-row>
            <div></div>
        </el-row>
      </div> 
    </div>
</template>

<script>

let now = new Date();
export default {
    name:"Footer",
    data(){
        return{
            curYear:0
        }
    },
    methods:{

    },
    created(){
        this.curYear = now.getFullYear();
    }
}
</script>

<style lang="stylus" scoped>

</style>