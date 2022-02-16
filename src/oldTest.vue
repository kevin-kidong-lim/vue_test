<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 <div>
  <h1>Hello {{ animal }} Vie</h1>
  <h2>kevin . {{ food }}.</h2>
  <!-- v-text는 많이 사용안한다..  -->
  <h3 v-text="food"></h3>
  <input type="text" v-model="food" />
  <div>{{alertMessage}}</div>
  <!-- v-html은 믿을수 있을띠만 사용하자.., 보안때문에.. 본인것만.. -->
  <div v-html="alertMessage"></div>
  <!-- html 태그와 변수를 동적으로 연동, v-bind:TAG -->
  <img v-bind:src="imageSource" alt="random"><br>
  <a v-bind:href="naverUrl">naver</a><br>
  <!-- v-bind 대신에 : 만으로 간략하게 -->
   <a :href="naverUrl">naver</a><br>
   <a :href="food">{{food}}</a><br>
   <hr />
   <!-- 동적으로 클래스 구현하기. -->
   <h2 class="orange">Monkey likes {{food}} .</h2>
   <!-- food가 apple 이면 red 클래스를 실행시켜라. -->
   <h2 v-bind:class="{red: food === 'apple'}">Monkey likes {{food}} .</h2>
    <h2 v-bind:class="{red: food === 'apple','not-good':food==='rice'}">Monkey likes {{food}} .</h2>
 </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data (){
    return {
      animal: "Monkey",
      food: "Apple",
      alertMessage: "<h2>Alert</h2>",
      imageSource:"https://placeimg.com/100/100/any",
      naverUrl:"https://www.naver.com"
    };
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input{
  font-size: 20px;
}

.orange{
  color: orange;
}
.salmon{
  color:salmon;
}
.red{
  color:red;
}
.not-good{
  text-decoration: line-through;
}
</style>

/////////////////////////////
<template>
  
  <template>
  <div>
    <h2>Your age is {{age}}.</h2>
    <p v-if="age > 18"> your adult </p>
    <!-- 중간에 다른값있으면 오류 -->
    <!-- <p>test</p> -->
    <h3 v-else-if="age >3 && age <=18">your boy</h3>
    <p v-else>your baby</p>
    <!-- tag 자체가 생생안됨 , 렌더링하는데 시간이 필욯면 v-show, 완전희 새로 생성하려면 v-if-->
    <h2 v-if="display">show</h2>
    <!-- tag 가 none 으로 바뀜. 디스플레이 속성만 변경, 값들은 가져온다. -->
    <h2 v-show="display">show2</h2>
    <h2>{{animals}}</h2>
    <hr >
    <!-- for 에 if를 쓸때, template을 사용할수 있다. -->
    <template v-for="animal in animals" :key="animal">
      <h2 v-if="animal === 'rat'">{{animal}} :: good1</h2>
    </template>
    <hr >
    <h2 v-for="animal in animals" :key="animal">{{animal}}</h2>
    <hr >
    <!-- index값을 임의로 지정할수 있고, 출력도 가능하다. -->
    <h2 v-for="(animal,index) in animals" :key="index">{{animal}}, {{index}}</h2>
     <!-- for 안에 if 를 써야 한다. -->
      <span v-if="animal === 'rat'">{{animal}} :: good2</span>
    <ul>
      <li v-for="(user,index) in users" :key="index">
        Name:{{user.name}} , JOb:{{user.job}}
        <p v-for="item in user.skill" :key="item">{{item}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data (){
    return {
      age:4,
      display:false,
      animals:["monkey","rat","dog","lion","rat2"],
      users:[
        { name:'scalper', job:'developer',gender:'mail',skill:["html","css","javascript"]},
         { name:'kevin', job:'designer',gender:'mail',skill:["html","css","javascript"]},
          { name:'john', job:'pm',gender:'femail',skill:["html","css","javascript"]},
      ]
    };
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input{
  font-size: 20px;
}
div{
  font-size: 20px;
}
.orange{
  color: orange;
}
.salmon{
  color:salmon;
}
.red{
  color:red;
}
.not-good{
  text-decoration: line-through;
}
</style>

</template>

<script>
export default {

}
</script>

<style>

</style>

////////////////////////////
<template>
  <div>
    <h1>{{count}}</h1>
    <button  v-on:click="addNumber">increas</button>
    <button  v-on:click="minusNumber">decreas</button>
    <button  v-on:mouseover="addNumber(10)">마우스오버증가</button>
    <h2 class="box">{{message}}</h2>
    <!-- @click , @mouseover축약형 사용가능 -->
    <button @click="greeting($event)">인사하기</button>
     <button @click="greeting($event,'ss')">인사하기2</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return { 
      count: 0,
      message: ""
      }
  },
  methods:{
    greeting($e, event){
      this.message = $e.pageX + "hi" + event;
    },
    // addNumber 만 호출했을때는 event 객체가 넘어온다.
    addNumber(value){
      this.count = this.count + value ;
    },
    // 에로우 펑션은 메소드에서 this를 못찾는다
    // 그래서 일반 함수 형태로 작성을 해줘야 한다.
    // minusNumber: () => {
    //   this.count = this.count -1;
    // },
    // 프록시는 v3에서 데이터를 잘 나오게 하려고, 만들었다.
    minusNumber(){
      this.count = this.count -1;
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input{
  font-size: 20px;
}
div{
  font-size: 20px;
}
.orange{
  color: orange;
}
.salmon{
  color:salmon;
}
.red{
  color:red;
}
.not-good{
  text-decoration: line-through;
}
.box{
  width:300px;
  height:300px;
  background: salmon;
}
</style>
