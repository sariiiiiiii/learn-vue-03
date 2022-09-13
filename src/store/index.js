import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations' // store/mutations.js
import actions from './actions'

Vue.use(Vuex);

// new Vuex.store는 인스턴스기 때문에 내보내야 한다 const store = ....
export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask
        },
        fetchedItem(state) {
            return state.item
        }
    },
    // mutations: { 이거 절대 안된다 mutations를 여러개 등록할 수도 있지 않을까? 왜 안되지...
    //     mutations,
    // }
    mutations: mutations,
    actions: actions,
})