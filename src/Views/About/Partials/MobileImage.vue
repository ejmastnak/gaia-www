<script setup>
const props = defineProps({
  imgFile: String,
  imgAlt: String,
})
</script>

<template>
  <div class="mx-2">
    <img 
    v-if="imgFile"
    :src="'/src/assets/img/' + imgFile"
    :alt="imgAlt"
    class="h-60 w-full max-w-md mx-auto object-cover rounded-md"
  />
    <div class="bg-orange-100 h-60 w-full max-w-md mx-auto object-cover rounded-md"/>
  </div>


</template>
