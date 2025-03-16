<script setup>
import { inject } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import PriceList from '@/Shared/PriceList.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import jabsokPropImage from '@/assets/img/jabsok-prop.jpg?w=800'
import applesCrateImage from '@/assets/img/apples-crate.jpg?w=800'

const products = inject('products')
</script>

<template>

  <PageWrapper>

    <div class="w-full flex items-center pr-2">
      <h1 class="text-5xl font-['Latin_Modern_Roman'] mr-2">{{$t('jabsok.title')}}</h1>
      <PrimaryLink routeBasename="buy" class="ml-auto inline-flex items-center gap-x-2">
        <ShoppingCartIcon class="-ml-1 text-white-600 h-6 w-6" />
        <p class="whitespace-nowrap">
          <span class="sm:hidden">{{$t('jabsok.order[0]')}}</span><span class="hidden sm:inline">{{$t('jabsok.order[0]')}} {{$t('jabsok.order[1]')}}</span>
        </p>
      </PrimaryLink>
    </div>

    <!-- Breadcrumb -->
    <p class="ml-px mt-1.5 text-base text-gray-600">
      <I18nRouterLink routeBasename="products">{{$t('products.h1')}}</I18nRouterLink>
      <span> > </span>
      <I18nRouterLink routeBasename="jabsok">{{$t('jabsok.title')}}</I18nRouterLink>
    </p>

    <!-- Summary -->
    <SimpleImagePanel 
      class="mt-10"
      :imgFile="jabsokPropImage"
      :imgAlt="$t('imgAlts.jabsokProp')"
    >
      <p>{{$t('jabsok.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">
        {{$t('jabsok.bio')}}
        <I18nRouterLink routeBasename="bio" class="text-blue-500 hover:text-blue-600 hover:underline">{{$t('jabsok.bioButton')}} &rarr;</I18nRouterLink>
      </p>
    </SimpleImagePanel>

    <!-- Production -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="false"
      :imgFile="applesCrateImage"
      :imgAlt="$t('imgAlts.applesCrate')"
    >
      <p>
        {{$t('jabsok.appleVarieties[0]')}}
        <span class="font-bold">{{$t('jabsok.appleVarieties[1]')}}</span>
        {{$t('jabsok.appleVarieties[2]')}}
      </p>
      <p class="mt-5">{{$t('jabsok.production[0]')}}</p>
      <p class="mt-5">{{$t('jabsok.production[1]')}}</p>
    </SimpleImagePanel>

    <PriceList class="mt-8" :products="products.filter((p) => p.code.startsWith('jabsok'))" />

  </PageWrapper>

</template>
