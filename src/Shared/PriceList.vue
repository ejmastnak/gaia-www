<script setup>
const props = defineProps({
  products: Array,
})
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
  <div class="max-w-2xl overflow-auto">
    <p class="font-bold">{{$t('partials.priceList.heading')}}</p>
    <div class="mt-3 min-w-[420px]">
      <div class="grid grid-cols-12">
        <p class="col-span-7 px-3 py-2 bg-orange-100">{{$t('partials.priceList.product')}}</p>
        <p class="col-span-5 px-3 py-2 bg-orange-200">{{$t('partials.priceList.price')}}</p>
      </div>
      <div class="grid grid-cols-12 border-b py-1 !text-left text-nowrap" >

        <!-- Names -->
        <template v-for="product in products" :key="product.name">
          <p class="col-span-7 px-3 py-1">{{product.name[locale]}}</p>
          <span class="col-span-5 px-3 py-1">{{(product.eur_cents/100).toFixed(2)}} €</span>
        </template>
      </div>
    </div>
  </div>
</template>
