export default { // store/index.js 파일에서 import
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ITEM(state, item) {
        state.item = item;
    },
    SET_LIST(state, list) {
        state.list = list;
    }
}