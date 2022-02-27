<template>
  <ion-page>
    <ion-content>
        <div>
            RouterMain
        </div>
     <ion-button @click="() => router.push({
          name: 'router-sub',
          params : {subid:123}          
          })">Go to Sub </ion-button>
 <ion-button @click="() => router.push({
          name: 'users-main',
          params : {id:1}          
          })">Go to users</ion-button>
    <!-- 새로운 라우터 시점이라는것을 알려줘야 한다.. -->
    <div>
         <!-- {{ tt }} //  -->
         <!-- {{ theCount2 }} -->
    </div>
             <router-view></router-view>

             <!-- <ion-router-outlet /> -->
    </ion-content> 
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent , ref, computed} from 'vue';
  import { useRouter } from 'vue-router';
   import { useStore } from "vuex";    
  export default defineComponent({
    name: 'RouteMain',
    components: {
      IonButton,
      IonContent,
      IonPage,
    },
   
    setup() {
      const router = useRouter();
        const store = useStore();
        // let tt = ref('');
        // tt.value = store.getters.getMsg;
        // let theCount = ref('');
        // theCount.value = store.state.count;
        
       

      return { router,
    //   tt,
    //   theCount,
    //   theCount2: computed(() => store.state.count),
      };
    },
  });
</script>