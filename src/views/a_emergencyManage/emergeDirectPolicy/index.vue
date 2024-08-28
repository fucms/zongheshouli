<template>
  <div class="appeal-recommendation">
    <!-- 页面标题 -->
    <el-page-header content="诉求推荐" class="recommendation-header" />

    <!-- 诉求类型选择 -->
    <el-form :inline="true" :model="form">
      <el-form-item label="诉求类型">
        <el-select v-model="form.appealType" placeholder="请选择诉求类型" @change="fetchRecommendations">
          <el-option
            v-for="item in appealTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>

    <!-- 推荐信息列表 -->
    <el-table :data="recommendations" style="width: 100%; margin-top: 20px;">
      <el-table-column prop="title" label="标题" width="300">
        <template slot-scope="scope">
          <el-link type="primary" @click="viewDetails(scope.row)">{{ scope.row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="summary" label="简介" />
    </el-table>

    <!-- 推荐信息详情对话框 -->
    <el-dialog title="推荐信息详情" :visible.sync="isDialogVisible" width="50%">
      <p>{{ currentDetail.title }}</p>
      <el-divider />
      <p>{{ currentDetail.content }}</p>
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
        appealType: 'environment'
      },
      appealTypes: [
        { value: 'environment', label: '环境保护' },
        { value: 'traffic', label: '交通出行' },
        { value: 'publicService', label: '公共服务' }
      ],
      recommendations: [],
      isDialogVisible: false,
      currentDetail: {}
    }
  },
  created() {
    this.fetchRecommendations()
  },
  methods: {
    // 模拟获取推荐信息
    fetchRecommendations() {
      const recommendationData = {
        environment: [
          { title: '城市垃圾处理问题', summary: '市民反映垃圾处理问题', content: '处理方式需要改进，增加环保措施。' },
          { title: '空气污染治理', summary: '空气质量问题的建议', content: '建议加强工业区排放监管。' },
          { title: '城市垃圾处理问题', summary: '市民反映垃圾处理问题', content: '处理方式需要改进，增加环保措施。' },
          { title: '空气污染治理', summary: '空气质量问题的建议', content: '建议加强工业区排放监管。' }
        ],
        traffic: [
          { title: '拥堵路段优化', summary: '市民建议改进交通线路', content: '优化路段，减少高峰期拥堵。' },
          { title: '公交车站增设', summary: '建议增加公交站点', content: '增设新的公交车站，方便市民出行。' },
          { title: '拥堵路段优化', summary: '市民建议改进交通线路', content: '优化路段，减少高峰期拥堵。' },
          { title: '公交车站增设', summary: '建议增加公交站点', content: '增设新的公交车站，方便市民出行。' }
        ],
        publicService: [
          { title: '社区医疗服务', summary: '社区医院服务不足', content: '建议增加社区医疗服务资源。' },
          { title: '教育资源配置', summary: '教育资源配置不均', content: '建议合理分配教育资源。' },
          { title: '社区医疗服务', summary: '社区医院服务不足', content: '建议增加社区医疗服务资源。' },
          { title: '教育资源配置', summary: '教育资源配置不均', content: '建议合理分配教育资源。' }
        ]
      }
      this.recommendations = recommendationData[this.form.appealType] || []
    },
    // 查看推荐信息详情
    viewDetails(detail) {
      this.currentDetail = detail
      this.isDialogVisible = true
    }
  }
}
</script>

<style scoped>
.recommendation-header {
  background-color: #eeeeee;
  padding: 20px;
  margin-bottom: 20px;
}

.el-form {
  margin-bottom: 10px;
  margin-left: 20px;
}

.el-table {
  margin:20px
}
</style>
