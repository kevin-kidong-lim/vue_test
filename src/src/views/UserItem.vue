<template>
  <!-- <ion-item-sliding  ref="slidingRef">
    <ion-item-options side="start">
      <ion-item-option color="danger" @click="closeSlide(key)">
        <ion-icon :icon="trashOutline" slot="icon-only" />
      </ion-item-option>
    </ion-item-options>
    <ion-item lines="full" color="secondary">
      <ion-icon  slot="start" />
      <ion-label> {{ user.firstName }} // {{ user.email }} </ion-label>
    </ion-item>
    <ion-item-options side="end">
      <ion-item-option @click="editCategory(key)">
        <ion-icon  slot="icon-only" />
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding> -->

      <ion-item-sliding  ref="slidingRef">
      <ion-item>
        <ion-label>{{ user.firstName }} // {{ user.email }}
            <ion-button @click="call">call</ion-button>
            <div >{{kevin}} - count: {{ count }}</div>
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary"  @click="closeSlide(user)">
          <ion-icon slot="bottom" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

</template>

<script>
  import { useRouter } from 'vue-router'
  import { trashOutline, create } from 'ionicons/icons'
  import { ref ,onMounted } from 'vue';

  export default {
    name: 'CategoryListItem',
    // 다양한 방법으로 선언 
    props: {
     user : Array,
     count: {
       type:  Number,
       default : 123,
       required : true
     }
    } 
       ,
    // props: {
    //   user: {
    //     type: Object,
    //     required: true,
    //   },
    // },
    setup(_, { emit }) {
      const router = useRouter()
     const slidingRef = ref(null);

      const editCategory = async (user) => {
        // await router.push(`/categories/edit/${categoryId}`)
        emit('onDelete', user)
      }

    
     const closeSlide = async (categoryId) => {
          console.log("closeSlide", categoryId);
        //   console.log("slidingRef.value", slidingRef.value);
        //   const s = await slidingRef.value.$el.close();
         
       
           emit('onDelete', categoryId, 111)
      }

    let kevin = ref('');
    kevin.value ="init";
    const call = () => {
        kevin.value = 'aaaaaa';
    }

        onMounted( () => {
            console.log("slidingRef.value", slidingRef.value);
            
            });
      return {
        trashOutline,
        create,
        editCategory,
        slidingRef,
        closeSlide,
        kevin,
        call
      }
    },
  }
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
