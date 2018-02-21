<template>
    <div class="container">
        <div>{{ message2 }}</div>
        <input type="text" v-model="message">
        <button type="button" v-on:click="showData">Click Me!</button>  
        <button type="button" v-on:click="clearData">Clear</button>  
    </div>
</template>

<script>
export default{
    data:function(){
        return {
            message:'',
            message2:''
        }
    },
    methods:{
        showData: function() {
            this.message2=this.message
        },
        clearData: function(){
            this.message2=''
            this.message=''
        }
    }
}
</script>
