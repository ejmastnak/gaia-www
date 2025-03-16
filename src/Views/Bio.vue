<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import appleBlossomsImage from '@/assets/img/apple-blossoms.jpg?w=600'

import certEko2015Image from '@/assets/img/certs/2015-eko.jpg'
import certEko2016Image from '@/assets/img/certs/2016-eko.jpg'
import certEko2017Image from '@/assets/img/certs/2017-eko.jpg'
import certEko2018Image from '@/assets/img/certs/2018-eko.jpg'
import certEko2019Image from '@/assets/img/certs/2019-eko.jpg'
import certEko2020Image from '@/assets/img/certs/2020-eko.jpg'
import certEko2021Image from '@/assets/img/certs/2021-eko.jpg'
import certBiokozmetika2020Image from '@/assets/img/certs/2020-biokozmetika.jpg'
import certBiokozmetika2021Image from '@/assets/img/certs/2021-biokozmetika.jpg'

const certs = [
  certEko2015Image,
  certEko2016Image,
  certEko2017Image,
  certEko2018Image,
  certEko2019Image,
  certBiokozmetika2020Image,
  certEko2020Image,
  certBiokozmetika2021Image,
  certEko2021Image,
]

const carouselIdx = ref(certs.length - 1)

function carouselNext() {
  carouselIdx.value = (carouselIdx.value + 1) % certs.length;
}

function carouselPrev() {
  carouselIdx.value = (carouselIdx.value === 0) ? certs.length - 1 : carouselIdx.value - 1;
}

</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('bio.h1')}}</h1>

    <!-- -mr moves image rightward -->
    <div class="mt-10 lg:flex space-x-16 lg:-mr-12">
      <div>
        <p>{{$t('bio.p1')}}</p>
        <p class="mt-2">{{$t('bio.p2')}}</p>
      </div>

      <img 
      :src="appleBlossomsImage"
      :alt="$t('imgAlts.appleBlossoms')"
      class="hidden lg:block mx-auto !w-96 h-80 object-cover rounded-md"
    />

    </div>

    <!-- Certificates -->
    <div class="w-fit">

      <h2 class="text-3xl -mt-10 pt-20 font-['Latin_Modern_Roman']" id="certificates">{{$t('bio.certificates')}}</h2>

      <img class="mt-6 w-80 mx-auto" :src="certs[carouselIdx]" />

      <!-- Carousel controls -->
      <div class="mt-2 mx-auto w-fit flex items-center gap-x-4">

        <!-- Previous -->
        <button type="button" @click="carouselPrev"  class="rounded-full bg-gray-300 p-1.5 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">
          <ChevronLeftIcon class="size-5" aria-hidden="true" />
        </button>

        <div class="flex gap-x-1.5">
          <div v-for="(num, i) in certs.length" :key="i" class="h-2 w-6 rounded-xl" :class="i === carouselIdx ? 'bg-lime-600' : 'bg-gray-200'" />
        </div>

        <!-- Next -->
        <button type="button" @click="carouselNext"  class="rounded-full bg-gray-300 p-1.5 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">
          <ChevronRightIcon class="size-5" aria-hidden="true" />
        </button>
      </div>

    </div>

  </PageWrapper>

</template>
