<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ionic Vue Ion Nav</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button @click="setOpen(true)">Show Modal With Nav</ion-button>
      <ion-modal
        :is-open="isOpenRef"
        @onDidDismiss="setOpen(false)"
      >
        <base-modal :rootPage="ModalHome"></base-modal>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonModal
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import BaseModal from "./modal/BaseModal.vue";
import ModalHome from "./modal/ModalHome.vue";
export default defineComponent({
  name: "ModalTest",
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => {
      console.log("state:", state);
      
      isOpenRef.value = state;
    };
    return { isOpenRef, setOpen,  ModalHome };
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonModal,
    BaseModal,
  }
});
</script>

<style scoped>
</style>