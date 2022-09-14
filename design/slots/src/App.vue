<template>
  <div>
    <ul>
      <!-- 아래와 같이 컴포넌트 등록을 해왔는데 slot 컴포넌트를 한번 살펴보자 -->
      <!-- <app-header></app-header>
      <app-content></app-content> -->

      <!-- slot을 이용하면 확장이 가능하다 -->
      <!-- 쇼핑몰 상품, 모달 등등 맘대로 확장이 가능 -->
      <item>아이템 1</item>
      <item>
        아이템 2 <button>click me</button>
      </item>
      <item>
        <div>
          아이템 3
        </div>
        <img src="./assets/endgame.png" alt="엔드게임" width="50px" height="50px">
      </item>
      <item>
        <!-- slot에는 스타일링도 가능 -->
        <div style="color: blue; font-size: 20px;">
          아이템 4
        </div>
      </item>
      <item>아이템 5</item>


      <!-- 이 방식을 썼을 경우 App.vue에 데이터가 계속 남아있고 -->
      <!-- 하위 컴포넌트 slot에서는 단지 화면에 표현만 한다 -->
      <!-- vue개발자 도구로 보면 하위 컴포넌트 data에서 undifined -->
      <!-- <item v-for="item in items">{{ item }}</item> -->


      <!-- props로 내려주는 방식 slot과 똑같이 된다 -->
      <!-- <item v-for="item in items" :item="item">
        
      </item> -->


    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      // 슬롯 컴포넌트를 활용하지 않았더라면 방식
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5'],
    }
  }
}
</script>