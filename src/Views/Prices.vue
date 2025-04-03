<script setup>
import { inject } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import PageWrapper from '@/Shared/PageWrapper.vue'
import PriceList from '@/Shared/PriceList.vue'

const products = inject('products')

</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('partials.priceList.heading')}}</h1>
    <PriceList class="mt-5" :products="products" />
  </PageWrapper>

</template>
