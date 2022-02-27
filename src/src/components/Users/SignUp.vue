<template>
  <ion-page>
    <ion-content>
        <div>
            SignUp.vue
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {  IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RouteMain',
    components: {
      IonContent,
      IonPage,
    }
  });
</script>