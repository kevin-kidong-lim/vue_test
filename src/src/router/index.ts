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

const RouterSub = () => {
  return import('../views/RouterSub.vue')
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
    name: 'users-main',    
    component:  () => import('@/views/Users/UsersMain.vue')
  },
  // {
  //   path: '/userList',
  //   name: 'UserList',
  //   component: UserList
  // },
  {
    path: '/page',    
    name: 'PageTest',    
    component: PageTest
  },
  // {
  //   path: '/kevin',    
  //   name: 'router-main',    
  //   component:  () => import('@/views/RouterMain.vue'),
  //   props: true,
  //   children: [
  //     {
  //       path: 'db',    
  //       name: 'router-sub',
  //       component: () => import('@/views/RouterSub.vue')
  //     }
  //     ,
  //    {
  //       path: 'test/:dd',
  //       name: 'tab_show_list',
  //       component: () => import('@/views/RouterSubDetail.vue')
  //    }
  //   ]
  // },
  {
    path: '/router/:id',    
    name: 'router-main',    
    component:  () => import('@/views/RouterMain.vue'),
    props: true,
    children: [
      {
        path: ':subid',    
        name: 'router-sub',    
        component: () => import('@/views/RouterSub.vue'),
        children: [
          {
            path: 'detail',
            name: 'router-sub-detail',
            component: () => import('@/views/RouterSubDetail.vue')
          },
          {
            path: 'edit',
            name: 'router-sub-edit',
            component: () => import('@/views/RouterSubEdit.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/test/test',    
    name: 'router-main-sub',    
    component: RouterSub,
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