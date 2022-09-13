<template>
  <div id="app">
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from  'axios'
import { handleException } from './utils/handler.js'

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          // user 정보가 1일 때
          if(response.data.id === 1) {
            console.log('사용자가 인증 되었습니다')
            // user의 할 일 목록 표출
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(response => {
                this.items = response.data;
              })
              .catch(error => console.log(error))
          }
        })
        .catch(error => console.log(error))
    },

    // ********************** async & await *************************

    async loginUser1() {
      // try & catch가 then, catch 보다 장점이
      // then catch처리는 비동기 요청에 대해서만 예외처리를 하는데
      // try & catch는 일반적인 자바스크립트의 예외처리까지 하기 때문에 좋다
      try {
        // async loginuser1 함수에서 axios는 기본적으로 Promise 객체를 반환하기 때문에 response에 담고 싶으면 앞에 await를 붙여줘야 한다
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        console.log(10) // 요청을 보내고 받아오는 시점에만 response에 대입을 하기 때문에 console.log(10) 이 작동하지 않는것은 아니다
        if(response.data.id === 1) {
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          console.log('사용자가 인증되었습니다')
          this.items = list.data;
        }
      } catch (error) {
        // handleException 이라는 전역 함수를 만들어서 에러 처리
        handleException(error);
        console.log(error);
      }
    }
  }
}

// async function sum() {
//   await // 항상 비동기처리 함수 앞에다가 await를 붙어야지 비동기 처리가 된다
// }

</script>

<style>

</style>
