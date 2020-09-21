<template>
<dir>
<!-- 文章显示 -->
    <el-card shadow="always">
        <div>文章标题</div>
        <div>
          <span>发表时间</span>
          <span>更新时间</span>
          <span>分类</span>
          <span>文本字数</span>
          <span>阅读时长</span>
        </div>
        <div>
            <h2>文章内容：简要</h2>
        </div>
        <div>阅读全文</div>
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