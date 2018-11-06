import VueRouter from 'vue-router'


import HomeContainer from './components/HomeContainer.vue'
import ConsultContainer from './components/ConsultContainer.vue'
import ActivityContainer from './components/ActivityContainer.vue'
import Setting from './components/Setting.vue'




// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/consult', component: ConsultContainer },
    { path: '/activity', component: ActivityContainer },
    { path: '/Setting', component: Setting }

  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router