import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入First组件
import First from '../components/views/First'

// 引入Second组件
import Second from '../components/views/Second'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 配置First的路由
    {
      path: '/first',
      name: 'First',
      component: First
    },
    // 配置Second的路由
    {
       path: '/second',
       name: 'Second',
       component: Second
    }
  ]
})
