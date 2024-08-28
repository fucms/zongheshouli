<template>
  <div class="appeal-registration">
    <!-- 页面标题 -->
    <el-page-header content="座席登记优化" class="registration-header" />

    <!-- 诉求登记表单 -->
    <el-form ref="form" :model="form" label-width="100px" class="form">
      <el-form-item label="市民名称">
        <el-input v-model="form.username" placeholder="请输入市民名称" />
      </el-form-item>

      <el-form-item label="手机号码">
        <el-input v-model="form.phoneNumber" placeholder="请输入手机号码" />
        <el-button type="primary" :disabled="isCodeSent" style="margin-top: 10px;" @click="sendVerificationCode">
          {{ !isCodeSent ? '发送验证码' : second + '秒后重新发送' }}
        </el-button>
      </el-form-item>

      <el-form-item label="验证码">
        <el-input v-model="form.verificationCode" placeholder="请输入验证码" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="validateAndSubmit">提交诉求</el-button>
      </el-form-item>
    </el-form>

    <!-- 验证成功提示 -->
    <el-dialog :visible.sync="isDialogVisible" title="验证成功" width="30%">
      <span>验证码通过验证，诉求已提交成功。</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        phoneNumber: '',
        verificationCode: ''
      },
      isCodeSent: false,
      isDialogVisible: false,
      time: '', // 当前时间
      second: 60,
      timer: '' // 定时器
    }
  },
  methods: {
    // 模拟发送验证码
    sendVerificationCode() {
      if (this.form.phoneNumber) {
        this.isCodeSent = true
        this.$message({
          message: '验证码已发送到手机，请查收。(测试验证码为123456)',
          type: 'success'
        })
        // 模拟重置发送状态
        this.timer = setInterval(() => {
          if (this.second > 0) {
            this.second--
          } else {
            clearInterval(this.timer)
            this.second = 60
            this.isCodeSent = false
          }
        }, 1000) // 60秒后可重新发送
      } else {
        this.$message({
          message: '请先输入手机号码。',
          type: 'warning'
        })
      }
    },
    // 验证并提交
    validateAndSubmit() {
      if (this.form.verificationCode === '123456') { // 假设123456是正确验证码
        this.isDialogVisible = true
        this.resetForm()
      } else {
        this.$message({
          message: '验证码错误，请重新输入。',
          type: 'error'
        })
      }
    },
    // 重置表单
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped>
.registration-header {
  background-color: #eeeeee;
  padding: 20px;
}

.form {
  margin-top: 20px;
  max-width: 400px;
}

.el-button {
  margin-left: 10px;
}
</style>
