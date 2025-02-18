<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import ReadMoreButton from '@/Components/ReadMoreButton.vue'

const props = defineProps({
  reverse: Boolean,
  imgFile: String,
  imgAlt: String,
  title: String,
  linkText: String,
  routeBasename: String,
  headingLink: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="md:flex gap-x-4" :class="reverse ? 'flex-row-reverse' : ''">

    <!-- Product title (mobile only) -->
    <I18nRouterLink v-if="headingLink && title" :routeBasename="routeBasename" class="block md:hidden">
      <h3 v-if="title" class="text-center mb-5 text-3xl font-['Latin_Modern_Roman']">
        {{title}}
      </h3>
    </I18nRouterLink>
    <h3 v-else-if="title" class="md:hidden text-center mb-5 text-3xl font-['Latin_Modern_Roman']">
      {{title}}
    </h3>

    <!-- Product image -->
    <div class="px-2 shrink-0">
      <img 
      v-if="imgFile"
      :src="imgFile"
      :alt="imgAlt"
      class="w-full h-64 mx-auto md:w-96 md:h-96 object-cover rounded-md"
    />
      <div v-else class="bg-orange-100 w-full shrink-0 h-56 mx-auto md:w-96 md:h-96 rounded-md"/>
    </div>

    <div class="px-4 md:px-8 mt-2">

      <!-- Product title (desktop only) -->
      <I18nRouterLink v-if="headingLink && title" :routeBasename="routeBasename" class="hidden md:block mb-4 lg:mb-6">
        <h3 v-if="title" class="hidden md:block text-3xl font-['Latin_Modern_Roman']">
          {{title}}
        </h3>
      </I18nRouterLink>
      <p v-else-if="title" class="hidden md:block mb-4 lg:mb-8 text-3xl font-['Latin_Modern_Roman']">
        {{title}}
      </p>

      <!-- Paragraph description -->
      <p class="text-lg lg:text-xl text-gray-700 leading-relaxed">
        <slot/>
      </p>

      <div>
        <ReadMoreButton class="mt-3 md:mt-6 mx-auto" :routeBasename="routeBasename" />
      </div>

    </div>
  </div>
</template>
