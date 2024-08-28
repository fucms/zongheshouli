<template>
  <div class="seat-permission-management">
    <el-page-header content="座席权限管理" class="page-header" />

    <el-row :gutter="20" class="main-content">
      <!-- 角色选择列表 -->
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>角色列表</span>
          </div>
          <el-tree
            :data="roleTreeData"
            :props="defaultProps"
            @node-click="handleRoleClick"
          />
        </el-card>
      </el-col>

      <!-- 权限分配列表 -->
      <el-col :span="18">
        <el-card>
          <div slot="header" class="clearfix">
            <span>权限分配 - {{ selectedRole }}</span>
          </div>
          <div v-if="selectedRole">
            <el-checkbox-group v-model="selectedPermissions">
              <el-checkbox v-for="permission in permissionList" :key="permission" :label="permission">{{ permission }}</el-checkbox>
            </el-checkbox-group>
            <div style="margin-top: 20px;">
              <el-button type="primary" @click="savePermissions">修改</el-button>
            </div>
          </div>
          <div v-else>
            <el-alert title="请先选择一个角色" type="warning" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleTreeData: [
        {
          label: '管理员',
          children: [
            { label: '系统管理员' },
            { label: '数据管理员' }
          ]
        },
        {
          label: '普通用户',
          children: [
            { label: '座席人员' },
            { label: '审核人员' }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectedRole: null,
      permissionList: ['查看数据', '修改数据', '删除数据', '导出数据', '审核权限'],
      selectedPermissions: []
    }
  },
  methods: {
    handleRoleClick(node) {
      this.selectedRole = node.label
      // 模拟获取角色已有的权限
      if (node.label === '系统管理员') {
        this.selectedPermissions = ['查看数据', '修改数据', '导出数据']
      } else {
        this.selectedPermissions = []
      }
    },
    savePermissions() {
      this.$message({
        message: `权限已成功分配给${this.selectedRole}`,
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: #eeeeee;
  padding: 20px;
  text-align: center;
}

.main-content {
  padding: 20px;
}

.el-card {
  margin-bottom: 20px;
}

.el-tree-node__content {
  cursor: pointer;
}
</style>
