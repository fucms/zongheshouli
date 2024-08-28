import Layout from '@/layout'

const produceRouter = {
  path: '/produce',
  component: Layout,
  redirect: '/basicInfo/index.vue',
  meta: {
    title: '微信应用优化',
    icon: 'nested'
  },
  children: [
    {
      path: '/basicInfo',
      component: () => import('@/views/produceManage/basicInfo/index.vue'),
      name: 'basicInfo',
      meta: { title: '诉求登记' }
    },
    {
      path: '/tailorManage',
      component: () => import('@/views/produceManage/tailorManage/index.vue'),
      name: 'tailorManage',
      meta: { title: '诉求查询' }
    }
  ]
}

export default produceRouter
