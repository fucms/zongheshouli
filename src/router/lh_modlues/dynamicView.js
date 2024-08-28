import Layout from '@/layout'

const dynamicRouter = {
  path: '/dynamic',
  component: Layout,
  redirect: '/intelligentMonitoring/index.vue',
  meta: {
    title: '录音管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/intelligentMonitoring',
      component: () => import('@/views/a_dynamicView/intelligentMonitoring/index.vue'),
      name: 'intelligentMonitoring',
      meta: { title: '录音管理' }
    }

  ]
}

export default dynamicRouter
