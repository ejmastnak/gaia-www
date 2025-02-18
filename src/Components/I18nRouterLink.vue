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
    class="p-px rounded-md hover:underline focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-orange-600"
    :class="{ 'text-blue-600': colored }"
    :to="{name: routeBasename + '.' + Translate.currentLocale}"
  >
    <slot />
  </RouterLink>
</template>
