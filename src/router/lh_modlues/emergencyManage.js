import Layout from '@/layout'

const emergencyRouter = {
  path: '/emergency',
  component: Layout,
  redirect: '/emergePhoneBook/index.vue',
  meta: {
    title: '优化网站受理',
    icon: 'nested'
  },
  children: [
    {
      path: '/emergePhoneBook',
      component: () => import('@/views/a_emergencyManage/emergePhoneBook/index.vue'),
      name: 'emergePhoneBook',
      meta: { title: '网站页面优化' }
    },
    {
      path: '/warnInfoPublish',
      component: () => import('@/views/a_emergencyManage/warnInfoPublish/index.vue'),
      name: 'warnInfoPublish',
      meta: { title: '网站新闻发布管理改造' }
    },
    {
      path: '/emergeHandInfo',
      component: () => import('@/views/a_emergencyManage/emergeHandInfo/index.vue'),
      name: 'emergeHandInfo',
      meta: { title: '网站在线问卷调查' }
    },
    {
      path: '/emergeDirectPolicy',
      component: () => import('@/views/a_emergencyManage/emergeDirectPolicy/index.vue'),
      name: 'emergeDirectPolicy',
      meta: { title: '诉求推荐' }
    },
    {
      path: '/emergeDrill',
      component: () => import('@/views/a_emergencyManage/emergeDrill/index.vue'),
      name: 'emergeDrill',
      meta: { title: '座席登记优化' }
    },
    {
      path: '/emergeManageInfo',
      component: () => import('@/views/a_emergencyManage/emergeManageInfo/index.vue'),
      name: 'emergeManageInfo',
      meta: { title: '角色权限融合管控' }
    }
  ]
}

export default emergencyRouter
