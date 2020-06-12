<template>
  <div class="flex flex-col">
      
    <div id="buscador" class="flex justify-center pt-6">

      <div class="max-w-lg border-b border-b-2 border-gray-400 mb-6 flex flex-row">
        <v-icon class="icon" name="lock"/>
        <input
          class="appearance-none bg-transparent border-none focus:shadow-xl w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Numero de cui"
        />
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Buscar
        </button>
      </div>

    </div>

    <div class="w-3/5">
      <PersonDetail/>

    </div>
    
  </div>
</template>

<script>
import PersonDetail from '../components/PersonDetail.vue'
export default {
  name:'Registro',
  components:{
    PersonDetail
  }
}
</script>

<style>

</style>