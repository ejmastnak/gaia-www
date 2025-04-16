<script setup>
import { inject } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import PriceList from '@/Shared/PriceList.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import ImagePanel from '@/Components/ImagePanel.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import jabsokPropImage from '@/assets/img/jabsok-prop.jpg?w=800'
import jabkisPropImage from '@/assets/img/jabkis-prop.jpg?w=800'
import sntoljImage from '@/assets/img/sntolj.jpg?w=800'

const products = inject('products')

</script>

<template>

  <PageWrapper>

    <div class="w-full flex items-center pr-2">
      <h1 class="text-5xl font-['Latin_Modern_Roman'] mr-2">{{$t('products.h1')}}</h1>
      <PrimaryLink routeBasename="buy" class="ml-auto inline-flex items-center gap-x-2">
        <ShoppingCartIcon class="-ml-1 text-white-600 h-6 w-6" />
        <p class="whitespace-nowrap">{{$t('products.order')}}</p>
      </PrimaryLink>
    </div>

    <div class="mt-10 max-w-xl">
      <p>{{$t('products.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">{{$t('products.bio')}}
        <I18nRouterLink routeBasename="bio" class="text-blue-500 hover:text-blue-600 hover:underline">{{$t('products.bioButton')}} &rarr;</I18nRouterLink>
      </p>
    </div>

    <div class="mt-10 md:mt-16 space-y-10 md:space-y-16">

      <ImagePanel
        :reverse="true"
        :imgFile="jabsokPropImage"
        :imgAlt="$t('imgAlts.jabsokProp')"
        :title="$t('jabsok.title')"
        routeBasename="jabsok"
        :headingLink="true"
      >
        {{$t("jabsok.summary")}}
      </ImagePanel>

      <ImagePanel
        :reverse="false"
        :imgFile="jabkisPropImage"
        :imgAlt="$t('imgAlts.jabkisProp')"
        :title="$t('jabkis.title')"
        routeBasename="jabkis"
        :headingLink="true"
      >
        {{$t("jabkis.summary")}}
      </ImagePanel>

      <ImagePanel
        :reverse="true"
        :imgFile="sntoljImage"
        :imgAlt="$t('imgAlts.sntolj')"
        :title="$t('sntolj.title')"
        routeBasename="sntolj"
        :headingLink="true"
      >
        {{$t("sntolj.summary")}}
      </ImagePanel>

    </div>

    <!-- Price list -->
    <div class="mt-8">
      <h2 class="text-2xl font-['Latin_Modern_Roman']">{{$t('buy.priceList')}}</h2>
      <p class="text-gray-500 text-base">{{$t('buy.ddv')}}</p>
      <PriceList class="mt-3" :products="products" />
      <p class="mt-5 max-w-2xl">
        <span class="font-bold">{{$t('shared.bottleToOrderHeading')}}</span>
        {{$t('shared.bottleToOrder')}}
      </p>
    </div>


  </PageWrapper>

</template>
