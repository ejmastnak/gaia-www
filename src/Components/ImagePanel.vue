<script setup>
const props = defineProps({
  reverse: Boolean,
  imgSrc: String,
  imgAlt: String,
  titleText: String,
  linkText: String,
  linkRoute: {
    type: String,
    default: "#",
  },
  imgClasses: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <div class="md:flex mt-10 px-4" :class="reverse ? 'flex-row-reverse' : ''">

    <!-- Service title (mobile only) -->
    <p v-if="titleText" class="md:hidden text-center mb-5 text-3xl font-['Latin_Modern_Roman']">
      {{titleText}}
    </p>

    <!-- Service image -->
    <div class="md:w-96 shrink-0 grid place-items-center">
          <img 
        :src="imgSrc"
        :alt="imgAlt"
        class="mx-auto my-auto object-cover rounded-md"
        :class="imgClasses"
      />
    </div>

    <div class="px-4 md:px-8 lg:px-14 mt-4">
      <!-- Service title (desktop only) -->
      <p v-if="titleText" class="hidden md:block mb-4 lg:mb-8 text-3xl font-['Latin_Modern_Roman']">
        {{titleText}}
      </p>
      <!-- Paragraph description -->
      <p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
        <slot/>
      </p>

      <!-- <RouterLink  -->
      <!--   :to="linkRoute" -->
      <!--   class="mt-4 md:mt-5 lg:mt-8 block w-fit mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 "  -->
      <!--   :class='{ -->
      <!--   "border-gray-100": linkRoute === "#", -->
      <!--   "hover:border-gray-100": linkRoute === "#", -->
      <!--   "hover:bg-transparent": linkRoute === "#", -->
      <!--   "text-gray-400": linkRoute === "#", -->
      <!--   "hover:text-gray-400": linkRoute === "#" -->
      <!--   }' -->
      <!-- > -->
      <!--   {{linkText}} -->
      <!-- </RouterLink> -->

      <p
        class="mt-4 md:mt-5 lg:mt-8 block w-fit mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 " 
        :class='{
        "border-gray-100": linkRoute === "#",
        "hover:border-gray-100": linkRoute === "#",
        "hover:bg-transparent": linkRoute === "#",
        "text-gray-400": linkRoute === "#",
        "hover:text-gray-400": linkRoute === "#"
        }'
      >
        {{linkText}}
      </p>

    </div>
  </div>
</template>
