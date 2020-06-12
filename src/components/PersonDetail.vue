<template>
  <div class="flex flex-grid w-full">
    <div class="w-2/6 flex justify-center">
      <img
        class="w-32 h-48"
        src="https://ep01.epimg.net/elpais/imagenes/2017/07/31/tentaciones/1501499103_170743_1501499591_sumario_normal.jpg"
        alt="foto de la persona"
      />
    </div>

    <div class="w-4/6">
      <div class="flex flex-col mb-4">
        <span class="text-sm text-gray-600">Nombres y apellidos</span>
        <div class="flex flex-row">
          <span>Brandon</span>
          <span>Stark</span>
        </div>
      </div>

      <div class="flex flex-col mb-4">
        <span class="text-sm text-gray-600">Fecha de nacimiento</span>
        <div class="flex flex-row">
          <span>quince de julio de mil novecientos ochenta y cuatro</span>
        </div>
      </div>

      <div class="flex flex-col mb-6">
        <span class="text-sm text-gray-600">País, Departamento, Municipio de nacimiento</span>
        <div class="flex flex-row">
          <span>Westeros,</span>
          <span>Winterfell,</span>
          <span>Winterfell,</span>
        </div>
        <span class="w-full">Hosp, Gral.San Juan de Dios</span>
      </div>

      <div class="flex justify-between">
        <div id="madre" class="flex flex-col items-center">
          <img
            class="w-24 h-32 mb-2"
            src="https://vignette.wikia.nocookie.net/gameofthrones/images/d/d8/CatelynS3Promo.jpg/revision/latest/top-crop/width/360/height/360?cb=20190427043743"
            alt="foto de la madre"
          />
          <div class="flex flex-col mb-2">
            <span class="text-sm text-gray-600">Nombres y apellidos</span>
            <div class="flex flex-row">
              <span>Catelyn</span>
              <span>Stark</span>
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <span class="text-sm text-center text-gray-600">Lugar de origen</span>
            <div class="flex flex-row flex text-center">
              <span>Winterfell Wersteros</span>
            </div>
          </div>
        </div>



        <div id="padre" class="flex flex-col items-center">
          <img
            class="w-24 h-32 mb-2"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ned_Stark-Sean_Bean.jpg/220px-Ned_Stark-Sean_Bean.jpg"
            alt="foto del padre"
          />
          <div class="flex flex-col mb-2">
            <span class="text-sm text-gray-600">Nombres y apellidos</span>
            <div class="flex flex-row">
              <span>Eddark</span>
              <span>Stark</span>
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <span class="text-sm text-center text-gray-600">Lugar de origen</span>
            <div class="flex flex-row flex text-center">
              <span>Winterfell Wersteros</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
span{
  margin-right: 0.5rem;
}
</style>