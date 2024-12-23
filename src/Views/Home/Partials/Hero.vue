<script setup>
import HeroSvg from './HeroSvg.vue'
</script>

<template>

  <div class="flex flex-col bg-[url('@/assets/img/hero.png')] bg-cover h-[42rem] border border-white">

    <div class="max-w-4xl mx-auto h-full w-full">
      <div class="pt-36 pl-12 text-white font-['Latin_Modern_Roman']">
        <p class="text-3xl ml-2 font-bold text-gray-100">Kmetija</p>
        <p class="text-8xl -mt-3 font-bold">Gaia</p>
        <p class="text-xl mt-6 max-w-sm text-gray-50">
          {{$t("home.partialHero.text")}}
        </p>
      </div>
    </div>

    <div class="mt-auto">
      <HeroSvg />
    </div>

  </div>

</template>
