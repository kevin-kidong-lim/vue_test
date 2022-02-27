<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>HOME</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-slides pager="true" :options="slideOpts" ref="mySlides" @ionSlideDidChange="slideChanged">
        <ion-slide>
          <h1>Slide 1</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>

    <div :style="{textAlign:'center', paddingTop: 16}">
      <ion-button @click="prevSlide" :disabled="disablePrevtBtn" >prv</ion-button>
      <ion-button @click="nextSlide" :disabled="disableNextBtn" >next</ion-button>
    </div>

        </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage,
 IonTitle,
  IonToolbar ,IonButton
 } from '@ionic/vue';

import { IonSlides, IonSlide } from '@ionic/vue';

import { defineComponent, onMounted, reactive, ref } from 'vue';

import SimpleModal from "./SimpleModal.vue";

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSlides, IonSlide ,IonButton
  },

  methods: {
    // callkevin(){
    //   console.log("method callkevin()");
    //   this.kevin ="call kevin";
    // }
  },
  setup(){
    const mySlides = ref<any>(null);
    const disablePrevtBtn = ref<boolean>(true);
    const disableNextBtn = ref<boolean>(false);

    const slideOpts = {
          initialSlide: 0,
          speed: 400
        };

    onMounted( () => {
      console.log("mySlides.value", mySlides.value);
      
    });

    const prevSlide = async () => {
    console.log("prevSlide");
     const s =  await mySlides?.value?.$el.getSwiper();
         console.log("prevSlide",s);
     await s.slidePrev();
     const activeIndex =  await mySlides?.value?.$el.getActiveIndex();
      console.log("activeIndex",activeIndex);

    }

     const nextSlide = async () => {
    console.log("slideNext");
     const s =  await mySlides?.value?.$el.getSwiper();
         console.log("slideNext",s);
     await s.slideNext();
     const activeIndex =  await mySlides?.value?.$el.getActiveIndex();
      console.log("activeIndex",activeIndex);

    }

    const slideChanged = async () => {
        console.log("slideChange");
        const slideLength =  await mySlides?.value?.$el.length();
        const activeSlide =  await mySlides?.value?.$el.getActiveIndex();
        disablePrevtBtn.value = activeSlide === 0
        disableNextBtn.value = activeSlide === slideLength-1;
        
    }
    return {
      //parameter
      slideOpts ,
      mySlides,
      // function
      prevSlide,
      nextSlide,
      slideChanged,
      disablePrevtBtn,
      disableNextBtn,
       
    }
  }
});
</script>





<style scoped>
ion-slide {
  height: 200px;
  background-color: orange;
}
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
