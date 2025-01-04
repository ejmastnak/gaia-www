<script setup>
  import Hero from './Partials/Hero.vue'
  import About from './Partials/About.vue'
  import Products from './Partials/Products.vue'
</script>

<template>
  <div class="mx-auto">
    <Hero class="w-screen" />

    <div class="max-w-5xl mx-auto">
      <About />
      <Products class="mt-16 md:mt-20" />
    </div>

  </div>
</template>
