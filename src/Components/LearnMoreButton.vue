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
  <I18nRouterLink :routeBasename="routeBasename" class="w-fit block rounded-md border border-gray-500 px-4 py-2 text-xl hover:bg-orange-50">
    {{text ?? $t("partials.learnMoreButton.text")}}
  </I18nRouterLink>
</template>
