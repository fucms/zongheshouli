<template>
  <div class="survey-page">
    <!-- 页面标题 -->
    <el-page-header content="网上调查问卷" class="survey-header" />

    <!-- 问卷调查列表 -->
    <el-main>
      <h2>问卷调查列表</h2>
      <el-table :data="surveyList" style="width: 100%">
        <el-table-column prop="title" label="问卷标题" width="300" />
        <el-table-column prop="description" label="问卷描述" />
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="openSurvey(scope.row)">填写问卷</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

    <!-- 问卷调查表单弹窗 -->
    <el-dialog :title="currentSurvey.title" :visible.sync="isSurveyDialogVisible" width="50%">
      <el-form :model="currentSurvey">
        <el-form-item v-for="(question, index) in currentSurvey.questions" :key="index" :label="question.text">
          <el-radio-group v-model="question.answer">
            <el-radio v-for="option in question.options" :key="option" :label="option">{{ option }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isSurveyDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitSurvey">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 问卷列表数据
      surveyList: [
        { title: '社区服务满意度调查', description: '了解社区服务的满意度情况', id: 1 },
        { title: '环境保护意识调查', description: '了解市民对环境保护的认知程度', id: 2 },
        { title: '交通出行调查', description: '了解市民对交通出行方式的选择', id: 3 }
      ],
      // 当前选中的问卷数据
      currentSurvey: {
        title: '',
        questions: []
      },
      // 控制问卷表单弹窗的显示
      isSurveyDialogVisible: false
    }
  },
  methods: {
    // 打开问卷填写表单  survey为每行row的数据：即surveyList
    openSurvey(survey) {
      this.currentSurvey.title = survey.title
      this.currentSurvey.questions = this.getSurveyQuestions(survey.id)
      this.isSurveyDialogVisible = true
    },
    // 模拟获取问卷问题
    getSurveyQuestions(id) {
      const questionsData = {
        1: [
          { text: '您对社区服务的总体评价如何？', options: ['非常满意', '满意', '一般', '不满意'], answer: '' },
          { text: '您对社区环境卫生的满意度如何？', options: ['非常满意', '满意', '一般', '不满意'], answer: '' }
        ],
        2: [
          { text: '您了解垃圾分类的具体内容吗？', options: ['非常了解', '了解', '一般', '不了解'], answer: '' },
          { text: '您对环保政策的支持度如何？', options: ['非常支持', '支持', '一般', '不支持'], answer: '' }
        ],
        3: [
          { text: '您最常用的交通工具是？', options: ['公交车', '地铁', '自行车', '步行'], answer: '' },
          { text: '您对当前交通状况的满意度如何？', options: ['非常满意', '满意', '一般', '不满意'], answer: '' }
        ]
      }
      return questionsData[id] || []
    },
    // 提交问卷表单
    submitSurvey() {
      console.log('提交的问卷数据:', this.currentSurvey)
      this.$message.success('问卷提交成功！')
      this.isSurveyDialogVisible = false
    }
  }
}
</script>

<style scoped>
.survey-header {
  background-color: #eeeeee;
  padding: 20px;
}

.el-main {
  padding: 20px;
}

.el-table {
  margin-top: 20px;
}

.dialog-footer {
  text-align: right;
}

h2 {
  margin-bottom: 20px;
}
</style>
