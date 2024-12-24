<script setup>
const props = defineProps({
  imgFile: String,
  imgAlt: String,
})
</script>

<template>
  <div class="md:flex flex-row-reverse gap-x-8">

    <img 
    v-if="imgFile"
    :src="'/src/assets/img/' + imgFile"
    :alt="imgAlt"
    class="w-full h-56 mx-auto md:w-96 md:h-96 object-cover rounded-md"
  />
    <div v-else class="bg-orange-100 w-full shrink-0 h-56 mx-auto md:w-96 md:h-96 rounded-md"/>

    <div class="mt-2 text-lg lg:text-xl text-gray-800 leading-relaxed">
      <slot />
    </div>
  </div>

</template>
