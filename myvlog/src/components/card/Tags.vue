<template>
    <div>
        <el-card>
            <div slot="header" class="tag-name">
                <i class="iconfont icon-tags"></i>
                <span>标签云</span>
            </div>
            <div>
                <p v-for="(item,index) in tags" :key="index">{{item}}</p>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Tags",
    data(){
        return{
            tags:["Spring","SpringBoot","SpringMVC","Zookeeper","Zuul","Kafuka"]
        }
    }
}
</script>

<style scoped>

</style>