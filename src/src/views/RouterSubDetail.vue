<template>
  <ion-page>
    <ion-content>
      <div>
        Router sub detail 
      </div>
      <ion-button @click="() => router.push({
          name: 'router-main',
          params : {id:1}          
          })">Go to main</ion-button>
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