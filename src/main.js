import Vue from 'vue'
import App from './App.vue'
// y引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义样式
import '@/styles/index.less'
// 引入路由
import router from '@/router/router.js'
Vue.use(ElementUI)

// 引入导航守卫
router.beforeEach((to, from, next) => {
  console.log(to)
  // 获取token
  const mytoken = localStorage.getItem('itcast_token')
  if (mytoken || to.path === '/login') {
    // eslint-disable-next-line no-unused-expressions
    next()
  } else {
    // eslint-disable-next-line no-unused-expressions
    next({ path: '/login' })
  }
})

Vue.config.productionTip = false

new Vue({
  // 注入路由
  router,
  render: h => h(App)
}).$mount('#app')
