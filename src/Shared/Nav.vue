<script setup>
import NavLink from './Partials/NavLink.vue'
import LanguageSwitcher from '@/Components/LanguageSwitcher.vue'
import { XMarkIcon, Bars3Icon  } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

const mobileMenuShowing = ref(false)

</script>

<template>
  <div class="sticky relative top-0 bg-white border-b z-20">
    <div class="max-w-5xl mx-auto">

      <!-- Desktop -->
      <div class="hidden md:flex">
        <!-- Large right margins make space for language switcher -->
        <div class="mr-28 max-w-5xl mx-auto w-full flex justify-between items-baseline pt-3 pb-5 px-4">
          <NavLink routeBasename="about">{{ $t("nav.about") }}</NavLink>
          <NavLink routeBasename="products">{{ $t("nav.products") }}</NavLink>
          <NavLink routeBasename="home" class="font-['Latin_Modern_Roman'] !text-3xl tracking-wide hover:text-blue-800">
            <p class="text-center tracking-wider">Kmetija Gaia</p>
          </NavLink>
          <NavLink routeBasename="wheretobuy">{{ $t("nav.wheretobuy") }}</NavLink>
          <NavLink routeBasename="contact">{{ $t("nav.contact") }}</NavLink>

        </div>
      </div>

      <!-- Mobile -->
      <div class="flex items-center md:hidden pt-3 pb-5 px-4">

        <NavLink routeBasename="home" class="translate-y-1 ml-1 xs:ml-2 font-['Latin_Modern_Roman'] !text-2xl xs:tracking-wide hover:text-blue-800">
          Kmetija Gaia
        </NavLink>

        <button type="button" class="ml-auto translate-y-1" >
          <Bars3Icon v-show="!mobileMenuShowing" class="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" @click="mobileMenuShowing = !mobileMenuShowing" />
          <XMarkIcon v-show="mobileMenuShowing" class="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" @click="mobileMenuShowing = !mobileMenuShowing" />
        </button>

      </div>

    </div>

    <Transition>
      <div v-show="mobileMenuShowing" class="absolute right-0 w-fit bg-white border-x border-b border-gray-300">
        <div class="relative flex flex-col px-8 pt-6 pb-8 text-left w-fit mx-auto space-y-4">
          <LanguageSwitcher class="-mt-4 -mx-2 ml-auto" />
          <NavLink @click="mobileMenuShowing = false" class="border-b" routeBasename="home">{{ $t("nav.home") }}</NavLink>
          <NavLink @click="mobileMenuShowing = false" class="border-b" routeBasename="about">{{ $t("nav.about") }}</NavLink>
          <NavLink @click="mobileMenuShowing = false" class="border-b" routeBasename="products">{{ $t("nav.products") }}</NavLink>
          <NavLink @click="mobileMenuShowing = false" class="border-b" routeBasename="wheretobuy">{{ $t("nav.wheretobuy") }}</NavLink>
          <NavLink @click="mobileMenuShowing = false" class="border-b" routeBasename="contact">{{ $t("nav.contact") }}</NavLink>

        </div>
      </div>
    </Transition>

    <LanguageSwitcher class="ml-1 hidden md:block md:absolute top-2 right-2" />
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
opacity: 0;
}
</style>
