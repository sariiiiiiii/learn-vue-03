import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItemInfo } from '../api/index'

export default {
    // **************************** promise *********************************
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS')
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },

    // FETCH_ASK(context) {
    //     return fetchAskList()
    //         .then(response => {
    //             context.commit('SET_ASK')
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    // FETCH_JOBS(context) {
    //     return fetchJobsList()
    //         .then(response => {
    //             context.commit('SET_JOBS')
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    // FETCH_USER({ commit }, name) {
    //     fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data)
    //         })
    //         .catch(error => console.log(error))
    // },
    // FETCH_ITEM({ commit }, item) {
    //     fetchItemInfo(item)
    //         .then(({ data }) => {
    //             commit('SET_ITEM', data)
    //         })
    //         .catch(error => console.log(error))
    // },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(response => {
    //             commit('SET_LIST', response.data)
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },


    // **************************** async *********************************
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data)
        // return 처리를 안해주게 되면 화면에서 비동기 순서를 보장할 수 없기 때문에
        // async, await도 반환을 해줘야 다음 처리를 할 수 있다.
        // 어떤것을 return 하든간에 promise가 반환
        return response; 
    },
    // try & catch를 api 단에서 적용
    // 비즈니스 로직을 많이 처리하는 action이나 component단 보다는 
    // api단에서 일단 한번 하고 들어오면 깔끔해진다
    // 화면에 가까워지는 코드가 깔끔해진다
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data)
        return response;
    },
    async FETCH_JOBS(context) {
        try {
            const response = await fetchJobsList();
            context.commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_USER(context, userName) {
        const response = await fetchUserInfo(userName);
        context.commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM(context, item) {
        const response = await fetchItemInfo(item);
        context.commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

}