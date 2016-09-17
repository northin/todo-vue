<template>
  <h1>{{title}}</h1>
  <button v-on:click="clikc1" >clikc1</button>
  <button v-on:click="clikc2" >clikc2</button>
</template>

<script>
export default {
  data:function(){
    return{
      title:"componentA"
    }   
  },
  props:['sparent'],
  methods:{
    clikc1:function(){
      console.log(this.sparent)
    },
    clikc2:function(){
      this.$emit('child-tell-me',this.title)
    }
  }
}
</script>

<style>

</style>
