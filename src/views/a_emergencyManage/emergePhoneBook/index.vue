<template>
  <div class="home-page">
    <!-- 导航栏 -->
    <el-header>
      <el-menu mode="horizontal" :default-active="activeMenu">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">受理分类</el-menu-item>
        <el-menu-item index="3">常见问题</el-menu-item>
        <el-menu-item index="4">联系我们</el-menu-item>
      </el-menu>
    </el-header>

    <!-- 受理分类 -->
    <el-main>
      <h3>受理分类</h3>
      <el-row :gutter="20">
        <el-col v-for="category in categories" :key="category.id" :span="6">
          <el-card :body-style="{ padding: '20px' }">
            <i :class="category.icon" />
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <el-button type="primary" @click="handleCategoryClick(category.id)">进入</el-button>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

    <!-- 提交表单 -->
    <el-main>
      <h3>受理提交</h3>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="受理类型">
          <el-select v-model="form.type" placeholder="请选择受理类型">
            <el-option
              v-for="item in categories"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="受理详情">
          <el-input v-model="form.details" type="textarea" placeholder="请填写受理详情" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-main>

    <!-- 常见问题 -->
    <el-main>
      <h3>常见问题</h3>
      <el-collapse>
        <el-collapse-item v-for="faq in faqs" :key="faq.id" :title="faq.question">
          <p>{{ faq.answer }}</p>
        </el-collapse-item>
      </el-collapse>
    </el-main>

    <!-- 底部信息 -->
    <el-footer>
      <div class="footer-content">
        <p>© 2024 综合受理平台. All rights reserved.</p>
        <p>联系我们: 123-456-7890 | 邮箱: support@example.com</p>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: '1',
      form: {
        type: '',
        details: ''
      },
      categories: [
        { id: 1, name: '户籍办理', description: '户籍相关事务的办理', icon: 'el-icon-user-solid' },
        { id: 2, name: '车辆管理', description: '车辆相关事务的办理', icon: 'el-icon-user-solid' },
        { id: 3, name: '社保服务', description: '社会保障相关服务', icon: 'el-icon-user-solid' },
        { id: 4, name: '公积金查询', description: '公积金账户查询及管理', icon: 'el-icon-user-solid' }
      ],
      faqs: [
        { id: 1, question: '如何办理户籍迁移？', answer: '您可以通过户籍办理分类中的户籍迁移模块进行申请。' },
        { id: 2, question: '社保卡丢失怎么办？', answer: '请前往社保服务分类中的挂失补办模块进行申请。' },
        { id: 3, question: '如何缴纳公积金？', answer: '公积金缴纳详情请查看公积金查询模块。' }
      ]
    }
  },
  methods: {
    handleCategoryClick(id) {
      // 在此处处理点击分类后的逻辑，比如导航到分类详情页面
      console.log('分类点击: ', id)
    },
    handleSubmit() {
      // 处理提交逻辑，例如将数据发送到后端
      console.log('提交数据: ', this.form)
      this.$message.success('提交成功！')
    }
  }
}
</script>

<style scoped>
.home-page {
  font-family: Arial, sans-serif;
}

.logo {
  font-size: 24px;
  color: #fff;
  padding-left: 20px;
}

.el-header {
  color: #fff;
}

.category-icon {
  width: 50px;
  height: 50px;
}

.footer-content {
  text-align: center;
  padding: 20px 0;
  background-color: #f2f2f2;
}

h2 {
  margin: 20px 0;
}
</style>
