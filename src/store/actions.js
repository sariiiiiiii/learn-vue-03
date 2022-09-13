import { fetchList, fetchUserInfo, fetchItemInfo } from '../api/index'

export default {
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data)
            })
            .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit }, item) {
        return fetchItemInfo(item)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(error => console.log(error))
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(response => {
                commit('SET_LIST', response.data)
                return response
            })
            .catch(error => console.log(error))
    },
}