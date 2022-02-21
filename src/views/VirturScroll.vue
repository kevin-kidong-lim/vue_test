<template>
  <ion-page>
    <ion-content>
      <ion-list>
        <RecycleScroller class="scroller" :items="list" :item-size="56">
          <template #default="{ item }">
            <ion-item>
              <ion-avatar slot="start">
                <img src="https://picsum.photos/seed/picsum/40/40" />
              </ion-avatar>
              <ion-label>{{ item }}</ion-label>
            </ion-item>
          </template>
        </RecycleScroller>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { IonAvatar, IonContent, IonItem, IonLabel, IonPage } from '@ionic/vue';

  export default defineComponent({
    components: {
      IonAvatar,
      IonContent,
      IonItem,
      IonLabel,
      IonPage,
    },
    setup() {
      const list = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      return { list };
    },
  });
</script>