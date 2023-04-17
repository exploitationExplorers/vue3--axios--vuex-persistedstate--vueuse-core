import { createRouter, createWebHashHistory } from 'vue-router'
import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/', component: Home
      },
      {
        path: '/category/:id', component: TopCategory
      },
      {
        path: '/category/sub/:id', component: SubCategory
      }

    ]
  }

]
// vue2.0 new VueRouter({}) 创建路由实例
// vue3.0 createRouter({}) 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
