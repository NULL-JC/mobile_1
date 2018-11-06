// 入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)


import { Header } from 'mint-ui'
Vue.component(Header.name, Header)



import './lib/mui/css/mui.min.css'




import router from './router.js'




import app from './App.vue'

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})