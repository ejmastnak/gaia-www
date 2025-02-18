<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'

const props = defineProps({
  routeBasename: String,
})
</script>

<template>
    <I18nRouterLink
        :routeBasename="routeBasename"
        class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline-orange-600"
    >
    <slot />
  </I18nRouterLink>
</template>
