<template>
  <div class="flex flex-wrap content-end h-full">

    <div class="w-full px-8 flex justify-end">
      <span>{{datenow}}</span>
    </div>

    <div class="w-full pl-4">
      <span class="text-5xl leading-tight text-gray-800 font-bold">Titulo</span>
    </div>

    <div class="w-full pl-4 pb-2">
       <span class="text-green-700 font-bold text-sm">pago valido seleccionado</span>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
export default {
  data: function(){
    return{
      datenow: ''
    }
  },
  methods: {
    time() {
      var self = this
      this.datenow = moment().format('LT')

      setInterval(self.time, 1000)
    }
  },
   mounted: function() {
    this.time()
  }
};
</script>

<style>
</style>