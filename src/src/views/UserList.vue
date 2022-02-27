<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>
    
  <ion-content :fullscreen="true">

  <ion-list class="ion-no-padding" ref="categoryListRef">
    <UserItem
      v-for="user in users"
      :key="user.firstName"
      :user="user"
      :userRe="user"
      :count = "totalNumber"
      @onDelete="resetSlides"
    />
     <!-- <UserItem /> -->
  </ion-list>
  </ion-content>
  </ion-page>
</template>


<script>
import { 

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
import UserItem from "./UserItem.vue";

export default defineComponent({
    name: 'CategoryList',
    // props: {
    //   users: {
    //     type: Array,
    //     required: true,
    //   },
    // },
  components: { 
    UserItem,
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
        const categoryListRef = ref(null)

      const resetSlides = async (userRe,count) => {
        // categoryListRef.value.closeSlidingItems()
        console.log("resetSlides:",userRe);
             const array = users.value;
              const index = array.indexOf(userRe);
              console.log("index:",index);
               console.log("count:",count);
              if (index > -1) array.splice(index, 1);

              const s = await categoryListRef.value.$el.closeSlidingItems();


      }
    onMounted( () => {
            console.log("categoryListRef.value", categoryListRef.value);
            
            });

    const dragging = () => {
      console.log("dragging");
    }

    return {
      archive, 
      ellipsisHorizontal, 
      ellipsisVertical,
      heart, 
      star, 
      trash,
      users,
      dragging,
      categoryListRef,
      resetSlides
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
