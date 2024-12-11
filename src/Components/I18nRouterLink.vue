<script setup>
import Translate from "@/i18n/translation"
import { RouterLink } from 'vue-router'
const props = defineProps({
  routeBasename: String,
})
</script>

<template>
  <RouterLink :to="{name: routeBasename + '.' + Translate.currentLocale}">
    <slot />
  </RouterLink>
</template>
