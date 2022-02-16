<template>
    <div>
        <h1>Users Detail</h1>
        {{userId}}
        <button @click="edit">edit</button>
    </div>
</template>
<script>

export default ({
    setup() {
        
    },
    computed: {
            userId(){
                return this.$route.params.id
            }
    },
    methods:{
        edit(){
            // this.$router.push({name:'users-edit'})
             this.$router.push({ path:`${this.userId}/edit`})
        }
    }
})
</script>
