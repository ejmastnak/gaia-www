<script setup>
import Translate from "@/i18n/translation"
import { RouterLink } from 'vue-router'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
const props = defineProps({
  routeBasename: String,
  text: String,
})
</script>

<template>
  <I18nRouterLink :routeBasename="routeBasename" class="block w-fit rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
    {{text ?? $t("partials.readMoreButton")}}
  </I18nRouterLink>
</template>
