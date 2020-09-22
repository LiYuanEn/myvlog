<template>
  <div>
    <div><h2>留言互动</h2></div>
    <img :src="boardImg" alt="图片不存在">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-info"></i> 留言说明: <br>
        <span>请勿必填写有效的地址，否则不会收到回复信息~</span>
      </div>
      <div>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item
            prop="username"
            label="用户名"
            :rules="[
              { required: true, message: '请输入用户名', trigger: 'blur' }
            ]"
          >
            <el-input v-model="dynamicValidateForm.username"></el-input>
          </el-form-item>
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
          >
            <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="desc" :rules="[
            { required: true, message: '请输入留言内容', trigger: 'blur' }
          ]">
            <el-input type="textarea" v-model="dynamicValidateForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <h2>留言展示</h2>
      </div>
    </el-card>
  </div>
</template>

<script>
import boardImg from '@/assets/board.gif'
export default {
  name: 'MessageBoard',
  data() {
    return {
      boardImg,
      dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: '',
          username: '',
          desc: ''
        }
      } 
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      }
    }
}
</script>

<style lang="less" scoped>

</style>