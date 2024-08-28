import Layout from '@/layout'

const storageRouter = {
  path: '/storage',
  component: Layout,
  redirect: '/storageManage/index.vue',
  meta: {
    title: '座席管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/locationManage',
      component: () => import('@/views/storageManage/locationManage/index.vue'),
      name: 'locationManage',
      meta: { title: '座席权限管理' }
    },
    {
      path: '/itemCount',
      component: () => import('@/views/storageManage/itemCount/index.vue'),
      name: 'itemCount',
      meta: { title: '座席信息管理' }
    },
    {
      path: '/inventoryManage',
      component: () => import('@/views/storageManage/inventoryManage/index.vue'),
      name: 'inventoryManage',
      meta: { title: '日志管理' }
    }
  ]
}

export default storageRouter
