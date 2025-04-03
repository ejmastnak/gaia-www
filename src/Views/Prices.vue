<script setup>
import { inject } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import PageWrapper from '@/Shared/PageWrapper.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import PriceList from '@/Shared/PriceList.vue'

const products = inject('products')

</script>

<template>

  <PageWrapper>

    <div class="w-full flex items-center pr-2">
      <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('prices.h1')}}</h1>
      <PrimaryLink routeBasename="buy" class="ml-auto inline-flex items-center gap-x-2">
        <ShoppingCartIcon class="-ml-1 text-white-600 h-6 w-6" />
        <p class="whitespace-nowrap">{{$t('prices.order')}}</p>
      </PrimaryLink>
    </div>

    <div class="mt-8">

      <p class="italic max-w-2xl">{{$t('partials.priceList.bottleToOrder[0]')}} {{$t('partials.priceList.bottleToOrder[1]')}} {{$t('partials.priceList.bottleToOrder[2]')}}</p>

      <PriceList class="mt-5" :products="products" />


      <p class="mt-2 max-w-2xl">
        <span>{{$t('prices.descriptions[0]')}}</span>
        <I18nRouterLink routeBasename="products" class="text-blue-600 hover:text-blue-700">
{{$t('prices.descriptions[1]')}}</I18nRouterLink>
        <span>{{$t('prices.descriptions[2]')}}</span>
      </p>

    </div>

  </PageWrapper>

</template>
