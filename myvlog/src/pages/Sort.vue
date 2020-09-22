<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="white"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <template slot="title">
              <span>全部</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">
              <el-link :underline="false">分类一</el-link>
            </span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">分类二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">分类三</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><Article></Article></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  
  name: 'Sort',
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang="less" scoped>

</style>