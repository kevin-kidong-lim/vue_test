<template>
  <ion-page>
    <ion-content>
        <div>
            Router Sub
        </div>
      <ion-button @click="() => router.push({
          name: 'router-sub-detail',
          params : {}          
          })">Go to detail</ion-button>
           <ion-button @click="() => router.push({
          name: 'router-sub-edit',
          params : {}          
          })">Go to edit</ion-button>
           <router-view></router-view>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'RouteMain',
    components: {
      IonButton,
      IonContent,
      IonPage,
    },
    setup() {
      const router = useRouter();
      
      return { router };
    },
  });
</script>