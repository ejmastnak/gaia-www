<script setup>
const props = defineProps({
  imgFile: String,
  imgAlt: String,
  reverse: {
    type: Boolean,
    default: true,
  }
})
</script>

<template>
  <div class="md:flex gap-x-8" :class="{
    'flex-row-reverse': reverse
    }">

    <div class="mx-2 shrink-0">
      <img 
      v-if="imgFile"
      :src="imgFile"
      :alt="imgAlt"
      class="shrink-0 w-full h-56 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md"
    />
      <div v-else class="bg-orange-100 w-full shrink-0 h-56 mx-auto md:w-96 md:h-96 rounded-md"/>
    </div>

    <div class="mt-5 md:mt-2 text-gray-800">
      <slot />
    </div>
  </div>

</template>
