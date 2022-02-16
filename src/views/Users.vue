<template>
<div>
             <h1>user</h1>
              <p> Search for User 11</p>

    search for user id 
    <label v-model="userId">
    </label>
    <input type="text" name="id">
    <!-- path를 사용할경우. -->
    <!-- <input type="button" @click="$router.puth({path: `users/${userId}`})"> -->
    <!-- name을 사용할경우 . -->
    <input type="button" @click="$router.puth({name: 'users-detail',
      params: { id: userId }})">
<div>
    <!-- 여기만의 라우터를 하겠다 하는 표시 .. -->
    <router-view></router-view>
</div>
</div>

    <div>
       <!-- <p> user no: {{ userId }} </p>
       <!-- 메뉴에서 값전달, 값을 숨겨줘서 보내줌. -->
       <!-- <p> user name: {{ $route.params.name }} </p>
       <p> user name: {{ $route.query.name }} </p> -->
       <!-- 브라우저에서 전달, 브라우저에 보이는거 -->
       <!-- <p> user group: {{ $route.query.group }} </p>
        <p> user category: {{ $route.query.category }} </p>
        <p> user address: {{ $route.query.address }} </p> --> 
       
    </div>
</template>
<script>

export default{
    data(){
        return {
            userId: null
        }
    },
    setup() {
        
    },
    computed:{
        userId(){

            return this.$route.params.userId
        }
    },
    created(){
        // 라우터 에 정의된거.
        console.log('router', this.$router);
        // params, query, 현재 주소와 관련된거
        console.log('route', this.$route);
    }
}
</script>
