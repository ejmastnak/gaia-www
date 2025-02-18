<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'

const props = defineProps({
  routeBasename: String,
  href: String,
  asAnchor: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <a
    v-if="asAnchor"
    :href="href"
    class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 focus-visible:outline-orange-600"
  >
    <slot />
  </a>
  <I18nRouterLink
    v-else
    :routeBasename="routeBasename"
    class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 focus-visible:outline-orange-600"
  >
    <slot />
  </I18nRouterLink>
</template>
