<template>
  <div class="appeal-query">
    <el-page-header content="诉求查询" class="query-header" />

    <el-form :inline="true" :model="queryForm" class="query-form">
      <!-- 诉求编号 -->
      <el-form-item label="诉求编号">
        <el-input v-model="queryForm.appealId" placeholder="请输入诉求编号" />
      </el-form-item>

      <!-- 时间范围 -->
      <el-form-item label="时间范围">
        <el-date-picker
          v-model="queryForm.dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          placeholder="请选择日期范围"
        />
      </el-form-item>

      <!-- 关键字 -->
      <el-form-item label="关键字">
        <el-input v-model="queryForm.keyword" placeholder="请输入关键字" />
      </el-form-item>

      <!-- 查询按钮 -->
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 查询结果表格 -->
    <el-table :data="queryResults" border style="width: 100%;margin: 20px;">
      <el-table-column prop="id" label="诉求编号" width="120" />
      <el-table-column prop="date" label="时间" width="180" />
      <el-table-column prop="content" label="诉求内容" />
      <el-table-column prop="status" label="状态" width="100">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 'resolved'" type="success">已解决</el-tag>
          <el-tag v-else-if="scope.row.status === 'pending'" type="warning">待处理</el-tag>
          <el-tag v-else type="info">处理中</el-tag>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalResults"
      :page-size="pageSize"
      style="margin-top: 20px; text-align: right;"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryForm: {
        appealId: '',
        dateRange: [],
        keyword: ''
      },
      queryResults: [],
      totalResults: 0,
      pageSize: 10
    }
  },
  methods: {
    handleQuery() {
      // 模拟查询操作，根据查询条件返回结果
      this.queryResults = [
        {
          id: '20220918',
          date: '2022-09-18',
          content: '道路破损，需要修复',
          status: 'resolved'
        },
        {
          id: '20221018',
          date: '2022-10-18',
          content: '绿化带杂草过多，请修剪',
          status: 'resolved'
        },
        {
          id: '20221019',
          date: '2022-10-19',
          content: '水管爆裂，影响出行',
          status: 'pending'
        },
        {
          id: '20221001',
          date: '2022-10-01',
          content: '路灯不亮，请尽快维修',
          status: 'processing'
        }
      ]
      this.totalResults = this.queryResults.length // 假设有3条数据
    },
    handleReset() {
      // 重置查询表单
      this.queryForm = {
        appealId: '',
        dateRange: [],
        keyword: ''
      }
      this.queryResults = []
    },
    handlePageChange(page) {
      // 分页逻辑 (如果有真实分页需求，需要实现此方法)
      console.log('Current page:', page)
    }
  }
}
</script>

<style scoped>
.query-header {
  background-color: #eeeeee;
  padding: 20px;
  text-align: center;
}

.query-form {
  margin: 20px auto;
  max-width: 800px;
}

.el-button {
  margin-left: 10px;
}

.el-table th, .el-table td {
  text-align: center;
}
</style>
