<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Java3</ion-title>
      </ion-toolbar>
    </ion-header>
    
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Java3 page</ion-title>
      </ion-toolbar></ion-header>
      <h2>Java3</h2>


  
  <ion-list ref="mySliding">

      <ion-item-sliding  v-for="(user, index) in users"  :key="index" @ionDrag="dragging">
      <ion-item>
        <ion-label>
          {{ user.firstName }} / {{ user.email }}
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary"   @click="selectedCategory(user)" >
          <ion-icon slot="bottom" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="bottom" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

  </ion-list>
  </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonIcon, 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel, 
  IonList
} from '@ionic/vue';
import { 
  archive, 
  ellipsisHorizontal, 
  ellipsisVertical,
  heart, 
  star, 
  trash
} from 'ionicons/icons';
import { defineComponent,  reactive, ref ,onMounted } from 'vue';

export default defineComponent({
  components: { 
    IonIcon, 
    IonItem, 
    IonItemOption, 
    IonItemOptions, 
    IonItemSliding, 
    IonLabel, 
    IonList
  },
  setup() {
    const users = ref([
            { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
            { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
            { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
            { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
            { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
        ]);
     const mySliding = ref(null);
      const mySliding2 = ref(null);


    const dragging = () => {
      console.log("dragging");
    }

    onMounted( () => {
      console.log("mySliding.value", mySliding.value);

      
    });

    const selectedCategory =  async (itemArray) => {
      
      const array = users.value;
      const index = array.indexOf(itemArray);
      if (index > -1) array.splice(index, 1);
      await  mySliding.value.$el.closeSlidingItems()
      
  }
      //      const resetSlides = async () => {
      //   // categoryListRef.value.closeSlidingItems()
      //   console.log("resetSlides:");
      //    const s = await categoryListRef.value.$el.closeSlidingItems();
      // }

          
    return {
      archive, 
      ellipsisHorizontal, 
      ellipsisVertical,
      heart, 
      star, 
      trash,
      users,
      dragging,
      mySliding,
       mySliding2,
       selectedCategory
    }
  }
});
</script>