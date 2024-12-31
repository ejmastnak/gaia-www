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
    class="block font-['Latin_Modern_Roman'] text-xl hover:underline hover:text-orange-900 rounded-lg px-2 py-1"
    :class="{
    'underline': currentRoute && currentRoute.name && currentRoute.name.startsWith(routeBasename),
    }"
  >
    <slot />
  </I18nRouterLink>

</template>
