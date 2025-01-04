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
    class="text-2xl hover:underline"
    :class="{
    'underline': currentRoute && currentRoute.name && currentRoute.name.startsWith(routeBasename),
    }"
  >
    <slot />
  </I18nRouterLink>
</template>
