<script setup>
import HeroSvg from './HeroSvg.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
</script>

<template>

  <!-- Solid black background color until image loads -->
  <div class="bg-black w-full h-full">
    <div class="flex flex-col bg-cover bg-[url('@/assets/img/hero-base.png')] xs:bg-[url('@/assets/img/hero-sm.png')] sm:bg-[url('@/assets/img/hero-sm.png')] md:bg-[url('@/assets/img/hero-md.png')] lg:bg-[url('@/assets/img/hero-lg.png')] xl:bg-[url('@/assets/img/hero-xl.png')] 2xl:bg-[url('@/assets/img/hero-2xl.png')] xxs:h-[24rem] xs:h-[24rem] sm:h-[30rem] md:h-[36rem] lg:h-[42rem] 2xl:h-[48rem]">

      <div class="max-w-6xl w-full self-center mt-12 sm:mt-16 md:mt-28 ml-8 xs:ml-16 sm:ml-20 md:ml-24 lg:ml-40 h-full text-white font-['Latin_Modern_Roman']">
        <p class="text-2xl sm:text-3xl ml-2 font-bold">Kmetija</p>
        <p class="text-6xl xs:text-7xl sm:text-8xl -mt-2 sm:-mt-3 font-bold">Gaia</p>
        <p class="font-['Latin_Modern_Sans'] text-xl ml-2 font-bold text-white">{{$t('home.hero.subHeading')}}</p>

        <p class="text-lg sm:text-xl mt-5 max-w-xs md:max-w-sm text-gray-50 bg-gray-900/60 rounded-xl px-2 py-1">
          {{$t("home.hero.text")}}
        </p>

        <I18nRouterLink class="px-2 italic" routeBasename="about">
          {{$t('home.hero.more')}}
          <span aria-hidden="true"> &rarr;</span>
        </I18nRouterLink>
      </div>

      <div class="mt-auto">
        <HeroSvg />
      </div>

    </div>
  </div>

</template>
