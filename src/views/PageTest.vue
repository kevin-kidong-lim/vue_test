<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/detail')">Go to detail </ion-button>
       <ion-button @click="() => router.push('/pagelist/123')">Go to list 123 </ion-button>
       <ion-button @click="() => router.push({name: 'page-list',
            query:{ group:'member', category:'trial'},
            params:{ userId:4433, userName: 'kevin', userAddress: '83 Monticello road'} })">Go to list 123 </ion-button>
      <!--  객체를 사용할 ㅇ예제 ,, 쿼리, 파람등을 넣을수 있다..  -->
       <ion-button @click="() => router.push({path: '/detail'})">Go to detail path</ion-button>
      <ion-button @click="() => $router.push({name: 'page-detail', query:{},params:{} })">Go to detail name</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButton,
      IonContent,
      IonPage,
    },
    setup() {
      const router = useRouter();

    //   console.log(this.$router.params);

      return { router };
    },
  });
</script>