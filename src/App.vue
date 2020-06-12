<template>
  <div id="app" class="flex">

    <aside v-if="islogin" id="left-panel" class="w-1/6 bg-gray-200 h-screen border-r ">
      <Menu/>
    </aside>

    <div v-if="islogin" class="w-5/6">
      <div id="head" class="bg-gray-200 border-b">
        <Header/>
      </div>
      <div id="view-a" class="bg-white">
        <router-view name="a"/>
      </div>
      
    </div>

    <router-view />

  </div>
</template>

<script>
import {bus} from './main'

import Menu from './components/Menu.vue'
import Header from './components/Header.vue'

export default {
  components:{
    Menu, Header
  },
  data:function(){
    return{
      islogin: false
    }
  },
  created(){
    var URLactual = window.location.pathname;
    if(URLactual == '/'){
      this.islogin = false
    }else{
      this.islogin = true
    }


  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
}
#head{
  height: 18vh;
}
#view-a{
  overflow: auto;
  height: 81.9vh;
}
</style>
