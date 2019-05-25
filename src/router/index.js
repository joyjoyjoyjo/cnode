import Vue from 'vue'
import Router from 'vue-router'
import articlee from '../components/article'
import postList from '../components/postList'
import userInfo  from '../components/userInfo';
import slideBar from '../components/slideBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:postList
      }
    },
    {
      name:'post_content',
      path:'/topic/:id&author=:name',
      components:{
        main:articlee,
        slideBar:slideBar
      }
    },
    {
      name:'userInfo',
      path:'/userinfo/:name',
      components:{
        main:userInfo
      }
    },
  ]
})
