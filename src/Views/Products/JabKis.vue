<script setup>
import { inject } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import PriceList from '@/Shared/PriceList.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import jabkisPropImage from '@/assets/img/jabkis-prop.jpg?w=800'
import applesCrateImage from '@/assets/img/apples-crate.jpg?w=700'
import kisCisternsImage from '@/assets/img/kis-cisterns.jpg?w=800'
import presaBarrelImage from '@/assets/img/presa-barrel-2.jpg?w=800'

const products = inject('products')
</script>

<template>

  <PageWrapper>

    <div class="w-full flex items-center pr-2">
      <h1 class="text-5xl font-['Latin_Modern_Roman'] mr-2">{{$t('jabkis.title')}}</h1>
      <PrimaryLink routeBasename="buy" class="ml-auto inline-flex items-center gap-x-2">
        <ShoppingCartIcon class="-ml-1 text-white-600 h-6 w-6" />
        <p class="whitespace-nowrap">
          <span class="sm:hidden">{{$t('jabkis.order[0]')}}</span><span class="hidden sm:inline">{{$t('jabkis.order[0]')}} {{$t('jabkis.order[1]')}}</span>
        </p>
      </PrimaryLink>
    </div>


    <!-- Breadcrumb -->
    <p class="ml-px mt-2 text-base text-gray-600">
      <I18nRouterLink routeBasename="products">{{$t('products.h1')}}</I18nRouterLink>
      <span> > </span>
      <I18nRouterLink routeBasename="jabkis">{{$t('jabkis.title')}}</I18nRouterLink>
    </p>

    <!-- Summary -->
    <SimpleImagePanel 
      class="mt-10"
      :imgFile="jabkisPropImage"
      :imgAlt="$t('imgAlts.jabkisProp')"
    >
      <p>{{$t('jabkis.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">
        {{$t('jabkis.bio')}}
        <I18nRouterLink routeBasename="bio" class="text-blue-500 hover:text-blue-600 hover:underline">{{$t('jabkis.bioButton')}} &rarr;</I18nRouterLink>
      </p>
    </SimpleImagePanel>

    <!-- Production 1 -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="false"
      :imgFile="applesCrateImage"
      :imgAlt="$t('imgAlts.applesCrate')"
    >
      <p>
        {{$t('jabkis.appleVarieties[0]')}}
        <span class="font-bold">{{$t('jabkis.appleVarieties[1]')}}</span>
        {{$t('jabkis.appleVarieties[2]')}}
      </p>
      <p class="mt-5">{{$t('jabkis.production[0]')}}</p>
    </SimpleImagePanel>

    <!-- Production 2 -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :imgFile="presaBarrelImage"
      :imgAlt="$t('imgAlts.presaBarrel')"
      :reverse="true"
    >
      <p>{{$t('jabkis.production[1]')}}</p>
      <p class="mt-5">{{$t('jabkis.production[2]')}}</p>
    </SimpleImagePanel>

    <!-- Production 3 -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :imgFile="kisCisternsImage"
      :imgAlt="$t('imgAlts.kisCisterns')"
      :reverse="false"
    >
      <p>{{$t('jabkis.production[3]')}}</p>
    </SimpleImagePanel>

    <!-- Price list -->
    <div class="mt-10">
      <h2 class="text-2xl font-['Latin_Modern_Roman']">{{$t('jabkis.priceList')}}</h2>
    <PriceList class="mt-4" :products="products.filter((p) => p.code.startsWith('jabkis'))" />
    </div>

  </PageWrapper>

</template>
