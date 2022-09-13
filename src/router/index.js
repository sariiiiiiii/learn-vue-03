import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../view/NewsView.vue'
import AskView from '../view/AskView.vue'
import JobsView from '../view/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import bus from '../utils/bus'
import { store } from '../store/index'

// import createListView from '../views/CreatedListView'

Vue.use(VueRouter); // 여기에 적어줄 경우 Vue를 인식을 못하기 때문에 import vue

export const router = new VueRouter({
  mode: 'history', // url뒤 #(해쉬값)을 없애주는 라우터 기능
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner')
        // store.dispatch('FETCH_LIST', this.$route.name)
        store.dispatch('FETCH_LIST', to.name) // console.log(to)를 찍어보면 결국 to.name과 같다
          .then(() => {
            console.log('fetched')
            bus.$emit('end:spinner')
            next();
          })
          .catch((error) => {
            console.log(error)
          })
      }
      // component: createListView('NewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView
      // component: createListView('AskView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
      // component: createListView('JobsView')
    },
    {
      path: '/item/:id',
      component: ItemView
    },
    {
      path: '/user/:id', // /(슬래시)를 하고 유저의 대한 id값을 넘긴다
      component: UserView
    }
  ]
})