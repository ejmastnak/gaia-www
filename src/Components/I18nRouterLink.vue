<script setup>
import Translate from "@/i18n/translation"
import { RouterLink } from 'vue-router'
const props = defineProps({
  routeBasename: String,
})
</script>

<template>
  <RouterLink
    class="p-px rounded-md hover:underline"
    :to="{name: routeBasename + '.' + Translate.currentLocale}"
  >
    <slot />
  </RouterLink>
</template>
