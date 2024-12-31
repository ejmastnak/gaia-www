<script setup>
const props = defineProps({
  href: String,
})
</script>

<template>
  <a :href="href" class="text-2xl hover:underline">
    <slot />
  </a>
</template>
