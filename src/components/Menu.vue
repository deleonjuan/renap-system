<template>
  <div id="menu" class="w-full h-full flex flex-wrap content-between">
    <div class="w-full">
      <h2 class="text-2xl py-8 text-center font-bold">Renap</h2>

      <ul>
        <li v-for="opcion in opciones" :key="opcion.id">
          <router-link :to="opcion.ruta">
            <div class="flex flex-rows pl-6 py-2 mb-1 hover:bg-gray-200">
              <v-icon class="icon" :name="opcion.icon" />
              <span class="pl-2 font-medium">{{opcion.titulo}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="w-full flex flex-col items-center mb-8">
      <img
        class="rounded-full h-10 w-10"
        src="https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG/revision/latest/top-crop/width/360/height/360?cb=20190714094440"
      />
      <span class="font-bold">jhon snow</span>
      <div class="flex flex-row" @click="onLogout">
        <span class="pr-2 font-medium text-red-700 text-sm">cerrar sesion</span>
        <v-icon class="icon exit" name="log-out" />
      </div>
    </div>
  </div>
</template>

<script>
//const ipcRenderer = window.require('electron').ipcRenderer;
export default {
  data: function() {
    return {
      opciones: [
        { titulo: "personas", icon: "users", ruta: "/registro" },
        { titulo: "pagos", icon: "credit-card", ruta: "/pagos" },
        { titulo: "antecedentes", icon: "archive", ruta: "/antecedentes" }
      ]
    };
  },
  methods: {
    onLogout: function(){
      //ipcRenderer.send("login", "off");
    }
  }
};
</script>

<style scoped>
#menu {
  color: #333;
}
ul {
  cursor: pointer;
}
.icon {
  width: 16px;
  color: #333;
}
.exit{
  color: red;
  width: 14px;
}
</style>>