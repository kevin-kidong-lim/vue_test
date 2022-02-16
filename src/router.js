import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
  return import(/* webpackChunkName: "about" */  './views/About.vue')
  // 필요한 라우터만 가져옴. 속도가 빠르다.
}

const Users = () => {
  return import(/* webpackChunkName: "users" */  './views/Users.vue')
  // 필요한 라우터만 가져옴. 속도가 빠르다.
}
const UsersDetail = () => {
  return import(/* webpackChunkName: "UsersDetail" */  './views/UsersDetail.vue')
  // 필요한 라우터만 가져옴. 속도가 빠르다.
}
const UsersEdit = () => {
  return import(/* webpackChunkName: "UsersEdit" */  './views/UsersEdit.vue')
  // 필요한 라우터만 가져옴. 속도가 빠르다.
}

export default new Router({
  // 주소에 # 이 들어감. 주석처리하면.. hash 모드(기본)은 #이 들어감..
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // 컴포넌트를 그대로 불러오면, 라우터가 모든 컴퍼넌트를
      // 손에 들고 있다가, 보여줌.( 모든것을 갖고 있기때문에 느림.)
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
      // 기본적으로 한페이지서 모든게 해결된다
      // 전ㅊ컴포넌트를 불러와서 라우터가 주속 입력값으로 찾아서 
      // 보여줌.
      // 라우터가 모든 컴퍼넌트를 갖고 있기때문에 , 시간이 오래걸니다
      // 레이지-로더 는, 천천히 나중에, 입력창에 해당되는것만 찾아서
      // 불러주는것( 빠르다 )
    },
    // 
    // {
    //   path: '/users/:userId',
    //   name: "users",
    //   component: Users
    // },
    // 하위메뉴 만들기 ...
    .com/users/1234(검색어)/edit
    {
      path: '/users',
      name: "users",
      component: Users,
      children: [
        {
          path: ":id",
          name: "users-detail",
          component: UsersDetail
        },
        {
          path: ":id/edit",
          name: "users-edit",
          component: UsersEdit
        },
      ]
    }
  ]
})
