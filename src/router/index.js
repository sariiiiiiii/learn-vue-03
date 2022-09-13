import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter); // 여기에 적어줄 경우 Vue를 인식을 못하기 때문에 import vue

export const router = new VueRouter({
  mode: 'history', // url뒤 #(해쉬값)을 없애주는 라우터 기능
  routes: [
    {
      path: '/',
      // 기본적으로 vue에서 제공하는 redirect
      redirect: '/news'
    },
    {
      // path: url 주소
      path: '/news',
      // component: url주소로 갔을 때 표시될 컴포넌트(컴포넌트는 보통 페이지라고 생각하면 편하다)
      component: NewsView
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: '/jobs',
      component: JobsView
    },
    {
      path: '/item',
      component: ItemView
    },
    {
      path: '/user',
      component: UserView
    }
  ]
})