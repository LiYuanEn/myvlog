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
            <span slot="title">
              <el-button>
                <el-link :underline="false">2020年8月</el-link>
              </el-button>
            </span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">
              <el-button>
                <el-link :underline="false">2020年8月</el-link>
              </el-button>
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
      <el-main><Article></Article>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Article from '../components/card/article'

export default {
  name: 'Archive',
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  components:{
    Article
  }
}
</script>

<style lang="less" scoped>

</style>