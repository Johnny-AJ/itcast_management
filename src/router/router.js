import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入登录页
import login from '@/views/login.vue'
// 首页
import home from '@/views/home.vue'
Vue.use(VueRouter)

// 创建路由对象
export default new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
      // 重定向
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'home',
      path: '/home',
      component: home
    }
  ]
})
