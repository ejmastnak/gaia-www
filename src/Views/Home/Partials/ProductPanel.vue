<script setup>
const props = defineProps({
  reverse: Boolean,
  imgFile: String,
  imgAlt: String,
  titleText: String,
  linkText: String
})
</script>

<template>
  <div class="md:flex mt-10 px-4" :class="reverse ? 'flex-row-reverse' : ''">

      <!-- Product title (mobile only) -->
    <p class="md:hidden text-center mb-5 text-3xl font-['Latin_Modern_Roman'] text-orange-950">
      {{titleText}}
    </p>

    <!-- Product image -->
    <img 
      :src="'/src/assets/img/' + imgFile"
      :alt="imgAlt"
      class="w-full h-56 mx-auto md:w-96 md:h-96 object-cover rounded-md"
    />

    <div class="px-4 md:px-8 lg:px-14 mt-4">
      <!-- Product title (desktop only) -->
      <p class="hidden md:block mb-4 lg:mb-8 text-3xl font-['Latin_Modern_Roman'] text-orange-950">
        {{titleText}}
      </p>
      <!-- Paragraph description -->
      <p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
        <slot/>
      </p>
      <a href="#" class="mt-4 md:mt-5 lg:mt-8 block w-fit mx-auto rounded-md border border-orange-900 px-4 py-2 text-xl text-orange-950 hover:bg-orange-50">
        {{linkText}}
      </a>
    </div>
  </div>
</template>
