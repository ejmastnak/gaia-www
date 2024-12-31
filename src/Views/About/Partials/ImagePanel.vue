<script setup>
const props = defineProps({
  title: String,
  imgFile: String,
  imgAlt: String,
})
</script>

<template>
  <div>
    <h2 class="text-4xl font-['Latin_Modern_Roman']">{{title}}</h2>
    <div class="mt-6 sm:flex sm:gap-x-5 items-start">
      <div class="ml-1 max-w-2xl sm:max-w-xl">
        <slot />
      </div>

      <!-- Image -->
      <div class="hidden sm:block w-72 md:w-96 shrink-0 grid place-items-start">
        <img 
        v-if="imgFile"
        :src="'/src/assets/img/' + imgFile"
        :alt="imgAlt"
        class="mx-auto object-cover rounded-md"
      />
        <div v-else class="bg-orange-100 h-60 w-full max-w-md mx-auto object-cover rounded-md"></div>
      </div>

    </div>
  </div>
</template>
