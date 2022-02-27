<template>
  <ion-page>
    <ion-content>
        <div>
            AllUsers.vue
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
 import { EventBus } from '@/main.ts";'

  export default defineComponent({
    name: 'AllUsers',
    components: {
      IonContent,
      IonPage,
    }
  });
</script>