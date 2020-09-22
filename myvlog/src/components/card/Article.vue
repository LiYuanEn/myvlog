<template>
<dir>
<!-- 文章显示 -->
    <el-card shadow="always">
        <div>文章标题</div>
        <div>
          <span>作者</span>
          <span>发表时间</span>
          <span>分类</span>
          <span>阅读量</span>
          <span>评论数</span>
        </div>
        <div>
          <h2>文章内容：简要</h2>
        </div>
        <div>文章标签</div>
    </el-card>
</dir>  
</template>

<script>
export default {
    name: 'Article',
    data() {
        return {
            title:'文章标题'
        }
    }
}
</script>

<style lang="less" scoped>

</style>

