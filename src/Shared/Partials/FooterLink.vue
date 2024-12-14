<script setup>
const props = defineProps({
  href: String,
})
</script>

<template>
  <a :href="href" class="text-2xl hover:underline hover:text-orange-50">
    <slot />
  </a>
</template>
