<script setup>
import HeroSvg from './HeroSvg.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
</script>

<template>

  <!-- Solid black background color until image loads -->
  <div class="bg-black w-full h-full">
    <div class="flex flex-col bg-cover bg-center bg-[url('@/assets/img/carjevic-flipped.jpg')] xxs:h-[24rem] xs:h-[24rem] sm:h-[30rem] md:h-[36rem] lg:h-[42rem] 2xl:h-[48rem]">

      <div class="w-fit xxs:mt-5 p-4 self-center xxs:self-auto xxs:ml-5 xxs:rounded-md text-white font-['Latin_Modern_Roman'] bg-gray-900/60">
        <p class="text-2xl sm:text-3xl ml-2 font-bold">Kmetija</p>
        <p class="text-6xl xs:text-7xl sm:text-8xl -mt-2 sm:-mt-3 font-bold">Gaia</p>
        <p class="font-['Latin_Modern_Sans'] text-xl ml-2 font-bold text-white">{{$t('home.hero.subHeading')}}</p>

        <!-- -mx-4 counteracts p-4 of parent container -->
        <div class="mt-5 -mx-4 bg-gray-900/10 p-1">
          <p class="text-lg sm:text-xl max-w-xs md:max-w-sm text-gray-50 px-2 py-1">
            {{$t("home.hero.text")}}
          </p>

          <I18nRouterLink class="ml-2 italic" routeBasename="about">
            {{$t('home.hero.more')}}
            <span aria-hidden="true"> &rarr;</span>
          </I18nRouterLink>

        </div>

      </div>

      <div class="mt-auto">
        <HeroSvg />
      </div>

    </div>
  </div>

</template>
