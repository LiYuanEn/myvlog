<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix" >最热文章</div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'HoteArticle'
}
</script>

<style lang="less" scoped>

</style>