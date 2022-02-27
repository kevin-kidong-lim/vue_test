<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/page')">Go to Home 123</ion-button>
            <div>
                    This is Users
                    <br>
                    PageTest
              userId : {{ userId }} <br>
              userName : {{ userName }} <br>
              userAddress : {{ userAddress }} <br>
               group : {{ group }} <br>
                category : {{ category }} <br>
         </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButton,
      IonContent,
      IonPage,
    },
    props: ['userId', 'userName','userAddress', 'group','category'],
    setup() {
      const router = useRouter();
      // let id = ref(null);
      // id = id;
      // console.log("router", router);
       console.log(router.currentRoute.value.params['userId']);
       console.log(router.currentRoute.value.params['userName']);
       console.log(router.currentRoute.value.params['userAddress']);
       console.log(router.currentRoute.value.query['group']);
       console.log(router.currentRoute.value.query['category']);
      return {
           router ,
            // id
           };
    },
  });
</script>