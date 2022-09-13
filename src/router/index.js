import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import createListView from '../views/CreatedListView'
import bus from '../utils/bus'
import { store } from '../store/index'

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
        store.dispatch('FETCH_LIST', to.name) // this.$route.name은 console.log(to)를 해보면 to.name과 같다
          .then(() => next()) // next() 를 적어줘야 URL이동함
          .catch((error) => {
            console.log(error)
          })
        // if(to.auth) {
        //   next();
        // } else {
        //   router.push('/') redirect push
        // }

      }
        
      // component: createListView('NewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name) // this.$route.name은 console.log(to)를 해보면 to.name과 같다
          .then(() => {
            console.log('fetched')
            // bus.$emit('end:spinner') // askView의 mouted()로 활용
            next(); // 필수
          })
          .catch((error) => {
            console.log(error)
          })
      }
      // component: createListView('AskView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name) // this.$route.name은 console.log(to)를 해보면 to.name과 같다
          .then(() => next())
          .catch((error) => {
            console.log(error)
          })
      }
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