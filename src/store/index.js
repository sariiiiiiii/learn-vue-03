import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index'

// vuex는 플러그인 형태로 사용되기 때문에
// Vue의 등록시키기 때문에 Vue 라이브러리를 import 해준다
Vue.use(Vuex);

// new Vuex.store는 인스턴스기 때문에 내보내야 한다 const store = ....
export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask
        }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    // api(api/index.js)를 vuex에서 호출한다고 하면 actions에서 호출
    actions: {
        // actions는 항상 mutations에 접근할 수 있게 context라는 것을 인자로 받는다
        FETCH_NEWS(context) {
            fetchNewsList()
                // fetchNewsList에서 받은 데이터를 바로 state로 넘겨주고 싶지만
                // vuex에서는 actions -> mutations -> state 구조 (flux 패턴) 이기 때문에 mutations로 먼저 보내줘야 한다
                .then(response => {
                    context.commit('SET_NEWS', response.data); // vuex api 기능(mutations 접근)
                })
                .catch(error => console.log(error))
        },
        // distructuring(디스트럭쳐링) https://jeong-pro.tistory.com/118
        FETCH_ASK({ commit }){ // context에서 commit을 꺼내서 바로 사용
            fetchAskList()
            // distructuring(디스트럭쳐링) https://jeong-pro.tistory.com/118
                .then(({ data }) => {
                    // console.log(context) 콘솔에서 context를 찍어보면 context에 어떤 속성들이 있는지 확인할 수 있다
                    commit('SET_ASK', data)
                })
                .catch(error => console.log(error))
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => {
                    context.commit('SET_JOBS', response.data)
                })
                .catch(error => console.log(error))
        }
    }
})