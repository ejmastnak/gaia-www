<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script>

<template>

    <I18nRouterLink
        routeBasename="buy"
        class="inline-flex items-center gap-x-2 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline-orange-600"
    >
    <ShoppingCartIcon class="-ml-1 text-white-600 h-6 w-6" />
    <p class="whitespace-nowrap">{{$t('partials.orderLink')}}</p>
  </I18nRouterLink>
</template>
