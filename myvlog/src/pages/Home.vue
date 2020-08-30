<template>
    <div class="home">
        <el-container>
            <el-main>
                
            </el-main>
            <el-aside  width="30%">
                <Me></Me>
                <Tags></Tags>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import Me from '../components/card/Me'
import Tags from '../components/card/Tags'

export default {
    name:"Home",
    components:{
        Me,
        Tags
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
      
      //border 1px solid #cccccc
      margin-top 39px
      padding 0px 10px
</style>