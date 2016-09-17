<template>
  <div id="app">
    <h1 v-html="title"></h1>  
    <input v-model="newItem" v-on:keyup.enter="submit">
    <ul>
      <li v-for="item in items" v-bind:class="{'isFinished':item.isFin}" v-on:click="isFined(item)">{{item.label}}</li>
    </ul>
    <hello></hello>
    <component-a sparent="you" v-on:child-tell-me="childTellMe"></component-a>
    <p>{{childWord}}</p>
  </div>
</template>

<script>
import Store from './store'
import componentA from './components/componentA'
import Hello from './components/Hello'


export default {
  data:function(){
    return{
      title:'this is a to-do list',
      items:Store.fetch(),
      newItem:'',
      childWord:'1'
    }   
  },
  components:{
    Hello,componentA
  
  },
  methods:{
    isFined:function(item){
      item.isFin =  !item.isFin;
    },
    submit:function(){
      this.items.push({
        label:this.newItem,
        isFin:false
      });
      this.newItem = '';
    },
    childTellMe:function(msg){
      this.childWord = msg;
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  }
}
</script>

<style>
.isFinished{
  color:red;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
