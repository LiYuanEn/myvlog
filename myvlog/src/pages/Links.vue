<template>
  <div>
    <div><h2>友情链接</h2></div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header">
              博客名称
            </div>
          </el-card>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  
    
  </div>
</template>

<script>
export default {
  name: 'Links'
}
</script>

<style lang="less" scoped>

</style>