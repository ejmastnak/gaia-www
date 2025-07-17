<script setup>
import HeroSvg from './HeroSvg.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
</script>

<template>

  <!-- Solid black background color until image loads -->
  <div class="bg-black w-full h-full">
    <div class="flex flex-col bg-cover bg-center sm:bg-left bg-[url('@/assets/img/hero-base.png')] xs:bg-[url('@/assets/img/hero-sm.png')] sm:bg-[url('@/assets/img/hero-sm.png')] md:bg-[url('@/assets/img/hero-md.png')] lg:bg-[url('@/assets/img/hero-lg.png')] xl:bg-[url('@/assets/img/hero-xl.png')] 2xl:bg-[url('@/assets/img/hero-2xl.png')] xxs:h-[28rem] xs:h-[28rem] sm:h-[30rem] md:h-[36rem] lg:h-[42rem] 2xl:h-[48rem]">

      <div class="mt-12 sm:mt-16 md:mt-28 ml-8 xs:ml-16 sm:ml-20 md:ml-24 lg:ml-40 h-full text-white font-['Latin_Modern_Roman']">
        <p class="text-2xl ml-2 font-bold">Naši</p>
        <p class="text-6xl xs:text-7xl sm:text-8xl -mt-2 sm:-mt-3 font-bold">Izdelki</p>
        <p class="text-xl ml-2 font-bold text-white">{{$t('home.hero.subHeading')}}</p>

        <p class="mt-5 max-w-xs md:max-w-sm text-gray-50 bg-gray-900/70 rounded-xl px-2 py-1">
          {{$t('products.summary')}}
        </p>

<PrimaryLink routeBasename="buy" class="mt-5 inline-flex items-center gap-x-2">
          <ShoppingCartIcon class="-ml-1 text-white-600 h-6 w-6" />
          <p class="whitespace-nowrap font-['Latin_Modern_Sans']">{{$t('products.order')}}</p>
        </PrimaryLink>

      </div>

      <!-- max-h prevents SVG from excessively pushing down page content below -->
      <div class="mt-auto max-h-[100px] xl:max-h-[150px]">
        <HeroSvg />
      </div>

    </div>
  </div>

</template>
