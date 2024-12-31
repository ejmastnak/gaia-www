<script setup>
import Translate from "@/i18n/translation"
import { RouterLink } from 'vue-router'
const props = defineProps({
  routeBasename: String,
  colored: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <RouterLink
    class="p-px rounded-md hover:text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
    :class="{ 'text-blue-600': colored }"
    :to="{name: routeBasename + '.' + Translate.currentLocale}"
  >
    <slot />
  </RouterLink>
</template>
