<template>
    <div class="home">
        <el-container>
            <el-main>
                <Article></Article>
            </el-main>
            <el-aside  width="25%">
                <Me></Me>
                <Tags></Tags>
                <HoteArticle></HoteArticle>
                <NewArticle></NewArticle>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import Me from '../components/card/Me'
import Tags from '../components/card/Tags'
import Article from '../components/card/article'
import HoteArticle from '../components/card/HotArticle'
import NewArticle from '../components/card/NewArticle'

export default {
    name:"Home",
    components:{
        Me,
        Tags,
        Article,
        HoteArticle,
        NewArticle
    }
}
</script>

<style lang="stylus" scoped>
.home
    display flex
    align-items center
    justify-content center
    width 80%
.el-aside
      margin-top 39px
      padding 0px 10px
</style>