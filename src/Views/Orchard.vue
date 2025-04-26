<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'

import jablaneImage from '@/assets/img/jablane.jpg?w=600'
import dandelionsImage from '@/assets/img/dandelions.jpg?w=600'
import sliveFlowersImage from '@/assets/img/slive-flowers.jpg?w=700'

</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('orchard.h1')}}</h1>

    <p class="mt-10 max-w-3xl">
      {{$t('orchard.intro[0]')}}
      <span class="italic">{{$t('orchard.intro[1]')}}</span> 
      {{$t('orchard.intro[2]')}}
      <span class="italic">{{$t('orchard.intro[3]')}}</span>
      <span class="">{{$t('orchard.intro[4]')}}</span>
    </p>

    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="false"
      :imgFile="dandelionsImage"
      :imgAlt="$t('imgAlts.dandelions')"
    >
      <p>{{$t('orchard.definition')}}</p>
      <p class="mt-3">{{$t('orchard.features')}}</p>
    </SimpleImagePanel>

    <p class="mt-5 md:mt-12 max-w-3xl">
      {{$t('orchard.mosiac')}}
    </p>

    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="true"
      :imgFile="jablaneImage"
      :imgAlt="$t('imgAlts.appleBlossoms')"
    >
      <p class="mt-3">
        <span class="font-bold">{{$t('orchard.comparisonTitle')}}</span>
        {{$t('orchard.comparison')}}
      </p>
    </SimpleImagePanel>

    <p class="mt-5">{{$t('orchard.notesHeading')}}</p>

    <ul class="mt-5 ml-5 list-disc max-w-3xl space-y-3">
      <li>
        {{$t('orchard.notes.species.intro')}}
        <a href="https://en.wikipedia.org/wiki/Apple" class="text-blue-600 hover:text-blue-700 hover:underline">{{$t('orchard.notes.species.apple')}}</a>
        <a href="https://en.wikipedia.org/wiki/Malus_sylvestris" class="text-blue-600 hover:text-blue-700 hover:underline">{{$t('orchard.notes.species.crabapple')}}</a>
        <a href="https://en.wikipedia.org/wiki/Pyrus_communis" class="text-blue-600 hover:text-blue-700 hover:underline">{{$t('orchard.notes.species.pear')}}</a>
        <a href="https://en.wikipedia.org/wiki/Prunus_domestica" class="text-blue-600 hover:text-blue-700 hover:underline">{{$t('orchard.notes.species.plum')}}</a>
        <a href="https://en.wikipedia.org/wiki/Prunus_avium" class="text-blue-600 hover:text-blue-700 hover:underline">{{$t('orchard.notes.species.sweetCherry')}}</a>
        <a href="https://en.wikipedia.org/wiki/Prunus_cerasus" class="text-blue-600 hover:text-blue-700 hover:underline">{{$t('orchard.notes.species.sourCherry')}}</a>
        {{$t('orchard.notes.species.and')}}
        <a href="https://en.wikipedia.org/wiki/Juglans_regia" class="text-blue-600 hover:text-blue-700 hover:underline">{{$t('orchard.notes.species.walnut')}}</a>
      </li>

        <!-- https://anediblelandscape.wordpress.com/the-traditional-orchard-story/ -->
      <li>{{$t('orchard.notes.integrated')}}</li>

      <li>
        <p>
          {{$t('orchard.notes.biodiversity.p1')}}
        </p>

        <p class="mt-2">
          {{$t('orchard.notes.biodiversity.studies.intro')}}
          <a href="https://doi.org/10.1016/j.biocon.2024.110815" class="hover:text-blue-700 hover:underline">
            {{$t('orchard.notes.biodiversity.studies.guariento.authors')}}
            <span class="italic">{{$t('orchard.notes.biodiversity.studies.guariento.title')}}</span>
            {{$t('orchard.notes.biodiversity.studies.guariento.journal')}}
          </a>
          <a href="https://doi.org/10.1016/j.actao.2016.12.010" class="hover:text-blue-700 hover:underline">
            {{$t('orchard.notes.biodiversity.studies.kajtoch.authors')}}
            <span class="italic">{{$t('orchard.notes.biodiversity.studies.kajtoch.title')}}</span>
            {{$t('orchard.notes.biodiversity.studies.kajtoch.journal')}}
          </a>
          {{$t('orchard.notes.biodiversity.studies.andReferencesTherein')}}
        </p>

      </li>

    </ul>

    <img 
    :src="sliveFlowersImage"
    :alt="$t('imgAlts.sliveFlowers')"
    class="mt-8 w-full sm:w-5/6 mx-auto rounded-md"
  />

  </PageWrapper>

</template>
