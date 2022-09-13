export default { // store/index.js 파일에서 import
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    }
}