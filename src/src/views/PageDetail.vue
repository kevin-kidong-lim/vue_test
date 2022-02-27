<template>

  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/page')">Go to Home</ion-button>
     <ion-button @click="() => router.push('/page')">Go to Home 123</ion-button>
            <div>
                    This is detail page
                    <br>
                    PageTest
             <!-- <router-link :to="pg">
                 <h1>PageTest</h1>
             </router-link>
              <router-link to="/page">PageTest</router-link>
         </div>
 <ion-button @click="() => router.push({
            name: 'page-detail-id',
            query:{ group:'member', category:'trial'},
            params:{ userId:4433, userName: 'kevin', userAddress: '83 Monticello road'
            }})">Go to detail Id</ion-button>
            <ion-button @click="() => router.push({path : '/pagelist'})">Go to detail Id</ion-button> -->
           <ion-button @click="() => router.push({
            name: 'page-detail-id',
            query:{ group:'member', category:'trial'},
            params:{ userId:4433, userName: 'kevin', userAddress: '83 Monticello road'
            }})">Go to detail Id</ion-button>
 
            
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
    setup() {
      const router = useRouter();
      let pg = ref(null);
      // pg.value = "/page";

      // const pgObject = ref({name:"/page"});

      return {
           router ,
           pg,
          //  pgObject
           };
    },
  });
</script>