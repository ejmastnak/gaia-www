<script setup>
import { inject } from 'vue'
import PriceList from '@/Shared/PriceList.vue'
import Bio from '@/Shared/Bio.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import sntoljImage from '@/assets/img/sntolj.jpg?w=800'
import sentjanzevkaFlowersImage from '@/assets/img/sentjanzevka-flowers.jpg?w=700'
import sntoljJarsImage from '@/assets/img/sntolj-jars.jpg?w=700'

const products = inject('products')
</script>

<template>

  <PageWrapper>

    <div class="w-full flex items-center pr-2">
      <h1 class="text-4xl xs:text-5xl font-['Latin_Modern_Roman'] mr-2">{{$t('sntolj.title')}}</h1>
      <PrimaryLink routeBasename="buy" class="ml-auto inline-flex items-center gap-x-2">
        <ShoppingCartIcon class="-ml-1 text-white-600 h-6 w-6" />
          <span class="sm:hidden">{{$t('sntolj.order[0]')}}</span><span class="hidden sm:inline">{{$t('sntolj.order[0]')}} {{$t('sntolj.order[1]')}}</span>
      </PrimaryLink>
    </div>

    <!-- Breadcrumb -->
    <p class="ml-px mt-2 text-base text-gray-600">
      <I18nRouterLink routeBasename="products">{{$t('products.h1')}}</I18nRouterLink>
      <span> > </span>
      <I18nRouterLink routeBasename="sntolj">{{$t('sntolj.title')}}</I18nRouterLink>
    </p>

    <!-- Summary -->
    <SimpleImagePanel 
      class="mt-10"
      :imgFile="sntoljImage"
      :imgAlt="$t('imgAlts.sntolj')"
    >
      <p>{{$t('sntolj.summary')}}</p>
      <Bio class="mt-4" />
    </SimpleImagePanel>

    <!-- Production -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="false"
      :imgFile="sentjanzevkaFlowersImage"
      :imgAlt="$t('imgAlts.sentjanzevkaFlowers')"
    >
      <p class="mt-5">{{$t('sntolj.production[0]')}}</p>
      <p class="mt-5">{{$t('sntolj.production[1]')}}</p>
    </SimpleImagePanel>

    <!-- Uses -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="true"
      :imgFile="sntoljJarsImage"
      :imgAlt="$t('imgAlts.sntoljJars')"
    >
      <p>{{$t('sntolj.uses.header')}}</p>
      <ul class="mt-3 ml-5 list-disc">
        <li>{{$t('sntolj.uses.list[0]')}}</li>
        <li>{{$t('sntolj.uses.list[1]')}}</li>
        <li>{{$t('sntolj.uses.list[2]')}}</li>
        <li>{{$t('sntolj.uses.list[3]')}}</li>
      </ul>
      <p class="mt-3">{{$t('sntolj.uses.footer')}}</p>
    </SimpleImagePanel>

    <p class="mt-5 md:mt-12 max-w-xl">
      <span class="font-bold">{{$t('sntolj.contraindications[0]')}}</span>
      {{$t('sntolj.contraindications[1]')}}
    </p>

    <!-- Price list -->
    <div class="mt-10">
      <h2 class="text-2xl font-['Latin_Modern_Roman']">{{$t('sntolj.priceList')}}</h2>
      <PriceList class="mt-4" :products="products.filter((p) => p.code.startsWith('sntolj'))" />
    </div>

  </PageWrapper>

</template>
