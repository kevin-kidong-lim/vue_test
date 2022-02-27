<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/page')">Go to Home</ion-button>
            <div>
                    This is detail page Id
                
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


      return {
        router
      }
    },

  });
</script>