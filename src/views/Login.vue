<template>
  <div class="flex flex-col h-screen w-full" id="login">
    <div id="body" class="px-8">
      <div id="header" class="pb-8">
        <h1 class="text-4xl text-gray-900 font-bold text-left">Ingresar</h1>
        <span class="text-gray-700">por favor logeate para continuar</span>
      </div>

      <div class="border-b border-b-2 border-gray-400 mb-6 flex flex-row">
        <v-icon class="icon" name="user"/>
        <input
          class="appearance-none bg-transparent border-none focus:shadow-xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Usuario"
        />
      </div>

      <div class="border-b border-b-2 border-gray-400 mb-6 flex flex-row">
        <v-icon class="icon" name="lock"/>
        <input
          class="appearance-none bg-transparent border-none focus:shadow-xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="password"
          placeholder="*********"
        />
      </div>

      <div class="flex justify-end">
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-full"
          type="button"
          @click="onLogin()"
        >continuar</button>
      </div>
    </div>

    <div id="footer" class="w-full h-aut">
      <p class="text-center text-gray-700 text-xs">&copy;2020 Renap Guatemala. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
//const ipcRenderer = window.require("electron").ipcRenderer;
import {bus} from '../main'

export default {
  name: "Login",
  data: function() {
    return {
    };
  },
  methods: {
    onLogin: function() {
      //ipcRenderer.send("login", "on");
    }
  }
};
</script>

<style scoped>
#login {
  background-color: #efefef;
}
#header {
  padding-top: 30%;
}
#body {
  height: 90%;
}
#footer {
  height: 10%;
}
.icon{
  width: 24px;
  color:#666
}
</style>