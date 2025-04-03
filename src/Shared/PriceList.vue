<script setup>
const props = defineProps({
  products: Array,
})
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
  <div class="max-w-2xl overflow-auto">
    <div class="grid grid-cols-12">
      <p class="col-span-3 sm:col-span-2 px-3 py-2 bg-orange-100"></p>
      <p class="col-span-5 px-3 py-2 bg-orange-200">{{$t('partials.priceList.product')}}</p>
      <p class="col-span-4 sm:col-span-5 px-3 py-2 bg-orange-100">{{$t('partials.priceList.price')}}</p>
    </div>
    <div class="grid grid-cols-12 py-1 !text-left" >
      <template v-for="product in products" :key="product.name">
        <div class="col-span-3 sm:col-span-2 py-1 border-b border-gray-200 grid place-items-center">
          <img :src="product.img" :alt="product.name[locale]" class="size-20 sm:size-28 rounded-md object-cover " />
        </div>
        <div class="col-span-5 sm:text-xl px-3 pt-2 border-b border-gray-200">
          {{product.name[locale]}}
          <span class="text-nowrap">{{product.qty[locale]}}</span>
        </div>
        <span class="col-span-4 sm:col-span-5 px-3 pt-2 border-b border-gray-200">{{(product.eur_cents/100).toFixed(2)}} € / {{product.unit[locale]}}</span>
      </template>
    </div>
  </div>
</template>
