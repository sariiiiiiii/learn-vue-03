// import 했을 때 axios라고 하는거는 package.json에 설치되어 있었던 라이브러리를 들고 오는 거
// import axios from '../../node_modules/axios
import axios from 'axios';

// 컴포넌트마다 호출하는 것이 아니라 api폴더에 모아놓고 사용


// 1. 보통 axios 파일에서 HTTP Request, Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/' // 공통 Url, prefix Url
}

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`); // ES6의 백틱 사용
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo(userName) { // Userview.vue의 라이프싸이클에서 보내주는 인자
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

function fetchItemInfo(item) {
    return axios.get(`${config.baseUrl}item/${item}.json`)
}

export { // 정리한 함수들 export
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
}