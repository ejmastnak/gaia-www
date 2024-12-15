<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import { useRoute } from "vue-router"
import { computed } from 'vue'

const props = defineProps({
  routeBasename: String,
})

const currentRoute = useRoute()

</script>

<template>

  <I18nRouterLink
    :routeBasename="routeBasename"
    class="block text-lg hover:underline hover:text-blue-600"
    :class="{
    'font-bold': currentRoute && currentRoute.name && currentRoute.name.startsWith(routeBasename),
    }"
  >
    <slot />
  </I18nRouterLink>

</template>
