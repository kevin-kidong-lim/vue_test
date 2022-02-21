import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const PageTest = () => {
  return import('../views/PageTest.vue')
}
const PageDetail = () => {
  return import('../views/PageDetail.vue')
}
const PageList = () => {
  return import('../views/PageList.vue')
}
const PageDetailId = () => {
  return import('../views/PageDetailId.vue')
}
import SlideMenu from '../views/SlideMenu.vue'
import UserList from '../views/UserList.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/page',    
    name: 'PageTest',    
    component: PageTest
  }
  ,
  {
    path: '/detail',    
    name: 'page-detail',    
    component: PageDetail,
    props: true,
    children: [
      {
        path: ':userId',    
        name: 'page-detail-id',    
        component: PageDetailId,
      }
    ]
  }
  ,
  {
    path: '/pagelist',    
    //  없애도 되김함.. name을 사용하면 .. 외부 링크일경우는 아래 처럼 사용함.
    // path: '/pagelist/:userId/:userName',    
    name: 'page-list',    
    component: PageList,
    props: true,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
///VirturScroll