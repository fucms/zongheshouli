<template>
  <div class="appeal-registration">
    <el-page-header content="诉求登记" class="registration-header" />

    <el-form ref="form" :model="form" label-width="120px" class="form" :rules="rules">
      <!-- 诉求类别 -->
      <el-form-item label="诉求类别" prop="appealType">
        <el-select v-model="form.appealType" placeholder="请选择诉求类别">
          <el-option label="环境保护" value="environment" />
          <el-option label="市政建设" value="municipal" />
          <el-option label="交通管理" value="traffic" />
          <el-option label="其他" value="other" />
        </el-select>
      </el-form-item>

      <!-- 个人信息 -->
      <el-form-item label="个人信息" prop="personalInfo">
        <el-input v-model="form.personalInfo" placeholder="请输入个人信息" />
      </el-form-item>

      <!-- 是否回复 -->
      <el-form-item label="是否回复" prop="isReply">
        <el-switch v-model="form.isReply" />
      </el-form-item>

      <!-- 诉求内容 -->
      <el-form-item label="诉求内容" prop="appealContent">
        <el-input
          v-model="form.appealContent"
          type="textarea"
          placeholder="请输入诉求内容"
          rows="4"
        />
      </el-form-item>

      <!-- 是否定位 -->
      <el-form-item label="是否定位" prop="isLocation">
        <el-radio-group v-model="form.isLocation">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 上传附件 -->
      <el-form-item label="上传附件" prop="attachment">
        <el-upload
          class="upload-demo"
          action="#"
          :file-list="fileList"
          list-type="picture"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-exceed="handleExceed"
          multiple
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">最多上传3个文件</div>
        </el-upload>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        appealType: '',
        personalInfo: '',
        isReply: false,
        appealContent: '',
        isLocation: false,
        attachment: []
      },
      fileList: [],
      rules: {
        appealType: [{ required: true, message: '请选择诉求类别', trigger: 'change' }],
        personalInfo: [{ required: true, message: '请输入个人信息', trigger: 'blur' }],
        appealContent: [{ required: true, message: '请输入诉求内容', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handlePreview(file) {
      console.log('preview:', file)
    },
    handleRemove(file, fileList) {
      console.log('remove:', file, fileList)
    },
    handleExceed(files, fileList) {
      this.$message.warning('上传数量限制为3个')
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message({
            message: '诉求登记提交成功',
            type: 'success'
          })
          this.handleReset()
        } else {
          this.$message({
            message: '请填写完整的表单信息',
            type: 'error'
          })
          return false
        }
      })
    },
    handleReset() {
      this.$refs.form.resetFields()
      this.fileList = []
    }
  }
}
</script>

<style scoped>
.registration-header {
  background-color: #eeeeee;
  padding: 20px;
  text-align: center;
}

.form {
  margin: 20px auto;
  max-width: 600px;
}

.el-button {
  margin-left: 10px;
}
</style>
