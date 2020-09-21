<template>
<div>
<!-- 文章显示 -->
        <el-card shadow="always">
            <div>{{title}}</div>
            <h1>文章显示</h1>
        </el-card>
</div>  
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