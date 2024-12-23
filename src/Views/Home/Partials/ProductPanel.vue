<script setup>
import LearnMoreButton from '@/Components/LearnMoreButton.vue'
const props = defineProps({
  reverse: Boolean,
  imgFile: String,
  imgAlt: String,
  title: String,
  linkText: String,
  routeBasename: String,
})
</script>

<template>
  <div class="md:flex mt-10 px-4" :class="reverse ? 'flex-row-reverse' : ''">

    <!-- Product title (mobile only) -->
    <p class="md:hidden text-center mb-5 text-3xl font-['Latin_Modern_Roman'] text-orange-950">
      {{title}}
    </p>

    <!-- Product image -->
    <img 
    v-if="imgFile"
    :src="'/src/assets/img/' + imgFile"
    :alt="imgAlt"
    class="w-full h-56 mx-auto md:w-96 md:h-96 object-cover rounded-md"
  />
    <div v-else class="bg-orange-100 w-full shrink-0 h-56 mx-auto md:w-96 md:h-96 rounded-md"/>

    <div class="px-4 md:px-8 lg:px-14 mt-4">
      <!-- Product title (desktop only) -->
      <p class="hidden md:block mb-4 lg:mb-8 text-3xl font-['Latin_Modern_Roman'] text-orange-950">
        {{title}}
      </p>
      <!-- Paragraph description -->
      <p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
        <slot/>
      </p>

      <LearnMoreButton class="mt-4 md:mt-8 mx-auto " :routeBasename="routeBasename" />

    </div>
  </div>
</template>
