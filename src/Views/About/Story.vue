<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'

import jablaneImage from '@/assets/img/jablane.jpg?w=600'
import sliveFlowersImage from '@/assets/img/slive-flowers.jpg?w=700'
import travnikiFallImage from '@/assets/img/travniki-fall.jpg?w=700'

</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('story.h1')}}</h1>

    <!-- Breadcrumb -->
    <p class="ml-px mt-1.5 text-base text-gray-600">
      <I18nRouterLink routeBasename="about">{{$t('about.h1')}}</I18nRouterLink>
      <span> > </span>
      <I18nRouterLink routeBasename="story">{{$t('story.h1')}}</I18nRouterLink>
    </p>

    <p class="mt-10 max-w-3xl">
      {{$t('story.ramsak')}}
    </p>

    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="false"
      :imgFile="travnikiFallImage"
      :imgAlt="$t('imgAlts.travnikiFall')"
    >
      <p>{{$t('story.previousOwner')}}</p>
      <p class="mt-3">{{$t('story.mastnakPurchase')}}</p>
    </SimpleImagePanel>

    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="true"
      :imgFile="jablaneImage"
      :imgAlt="$t('imgAlts.jablane')"
    >
      <p>{{$t('story.mastnakTakeover')}}</p>
      <p class="mt-3">{{$t('story.neighbors')}}</p>
    </SimpleImagePanel>

    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="false"
      :imgFile="sliveFlowersImage"
      :imgAlt="$t('imgAlts.sliveFlowers')"
    >
      <p class="mt-3">{{$t('story.future')}}</p>
    </SimpleImagePanel>

  </PageWrapper>

</template>
