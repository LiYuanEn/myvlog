<template>
<dir>
<!-- 文章显示 -->
    <el-card shadow="always">
        <div class="title" >
          <slot name="title">文章dfsffsfsfsdfsfdsfsdfsdfsdfdsfsdfsdf标题</slot>
        </div>
        <div>
          <div class="author">
            <i class="el-icon-user"></i>
            <span>作者<slot name="author"></slot></span>
            <i class="el-icon-timer"></i>
            <span>发表于<slot name="issuingtime"></slot></span>
            <br>
            <i class="el-icon-s-order"></i>
            <span>分类 <slot name="sort"></slot>|</span>
            <i class="el-icon-view"></i>
            <span>阅读量 <slot name="readnum"></slot>|</span>
            <i class="el-icon-chat-line-round"></i>
            <span>评论数 <slot name="comment"></slot></span>
          </div>
          
        </div>
        <div class="content">
          <slot name="content">文章内的方式放水电费大是dadsada打发斯蒂芬fsfsfdsf大sdadas说到底 大的方式发送大大容：简要dfsfs</slot>
        </div>
        <div class="tags"><slot name="tags"><el-tag>标签一</el-tag></slot></div>
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
.title{
    font-size: 28px;
    color: #707276;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.author span,i{
    font-size: 14px;
    color: #ACACAC;
}
.author{
    text-align: left;
}
.content{
    text-align: left;
    font-size: 22px;
    color: 102,102,102;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Firefox */
    display: -moz-box;
    -moz-line-clamp: 1;
    -moz-box-orient: vertical;
    /* Safari、Opera、Chrome */
    display: -webkit-box;
    /* 盒子垂直对齐 */
    -webkit-box-orient: vertical;
    /* 两行 */
    -webkit-line-clamp: 2;
}
.tags{
    text-align: left;
}
</style>

