<script setup>
  import Hero from './Partials/Hero.vue'
  import About from './Partials/About.vue'
  import Products from './Partials/Products.vue'
</script>

<template>
  <div class="mx-auto">
    <Hero class="w-screen" />

    <!-- -mt accomodates wave SVG growing larger and pushing down About us heading -->
    <div class="lg:-mt-8 xl:-mt-16 2xl:-mt-20 max-w-5xl mx-auto">
      <Products />
      <About class="mt-16 md:mt-20"  />
    </div>

  </div>
</template>
