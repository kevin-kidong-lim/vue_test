<template>
    <div>
        <h1>Users Edit</h1>
        {{userId}}
      
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
            this.$router.push({name:'users-edit'})
        }
    }
})
</script>