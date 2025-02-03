<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <I18nRouterLink
        routeBasename="whereToBuy"
        class="w-fit inline-flex items-center block rounded-md border border-gray-500 px-4 py-2 text-xl hover:bg-orange-50"
    >
    <ShoppingCartIcon class="-ml-1 text-gray-600 h-6 w-6" />
    <p class="ml-1 whitespace-nowrap">Order</p>
  </I18nRouterLink>
</template>
