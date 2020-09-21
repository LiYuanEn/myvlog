<template>
    <div>
        <el-card class="box-card" shadow="always">
            <div class="me-name" slot="header">
                <i class="iconfont icon-mingpian" ></i>
                <span>我的名片</span>
            </div>
            <div class="me-description">
                <p>网名：Mr.Li | 李元恩</p>
                <p>职业：java全栈开发工程师</p>
                <p>现居：安徽省-合肥市</p>
                <p>Email：1453828002@qq.com</p>
                <p>QQ:1453828002</p>
            </div>
      
            <div class="me-tool">
                <el-popover
                  v-for="(item,index) in info" :key="index"
                  placement="top-start"
                  title=""
                  width="100px"
                  trigger="hover"
                  content=""
                >
                <el-image v-if="item.type == 'img'" :src="item.src">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
                <a v-if="item.type == 'link'" target="_blank" :href="item.src">{{item.title}}</a>
                <el-button slot="reference">
                    <i :title="item.title" :class="'iconfont icon-'+item.icon"></i>
                </el-button>
                </el-popover>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name:'Me',
    data(){
        return{
        info:[
        {
          type:'img',
          src:'/static/img/qq.jpg',
          icon:'QQ',
          title:'QQ'
        },{
          type:'img',
          src:'/static/img/wechat.jpg',
          icon:'wechat1',
          title:'微信'
        },{
          type:'link',
          src:'https://github.com/LiYuanEn',
          icon:'gitee-fill-round',
          title:'我的码云'
        },{
          type:'link',
          src:'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=Fns4b3l4cVZweW57d396OHV5ew',
          icon:'email',
          title:'发送邮件'
        }
      ]
        }
      
    }
    
}
</script>

<style lang="stylus" scoped>
.me-name
  i 
    font-size 20px
    color #ff9401
    font-weight bold
  span
    font-weight bold
    text-align center
.me-description
  text-align left 
.me-description > p
  padding-top 10px
.me-tool
    text-align center
    padding-top 10px
    .el-button
      padding 12px 10px
      border none 
    span
      margin 0 5px
    i 
      cursor pointer
      padding 4px 10px
      font-size 30px
</style>