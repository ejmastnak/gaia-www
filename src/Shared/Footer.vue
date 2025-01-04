<script setup>
import FooterLink from './Partials/FooterLink.vue'
import FooterSvg from './Partials/FooterSvg.vue'
</script>

<template>
  <div>
    <!-- Background pattern -->
    <FooterSvg />

    <!-- Main footer content -->
    <div class="bg-black text-white px-4 pb-24 text-lg">
      <div class="max-w-5xl mx-auto flex">

        <!-- Gaia d.o.o. info -->
        <div class="ml-4">
          <p class="text-5xl font-['Latin_Modern_Roman']">Kmetija Gaia</p>
          <div class="mt-8">
            <p>Center Gaia d.o.o.</p>
            <p>Tolsti Vrh pri Mislinji 47</p>
            <p>2382 Mislinja, Slovenija</p>
          </div>
          <div class="mt-6 border-t border-gray-400 w-fit">
            <a class="mt-3 block" href="mailto:info@gaia.si">
              info@gaia.si
            </a>
            <a class="flex items-center" href="tel:+38631230167">
              <p class="text-sm font-bold">+</p>
              <p>386 31 230 167</p>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="hidden lg:block ml-auto mt-3 flex justify-around space-x-12 h-fit">
          <FooterLink routeBasename="about">About us</FooterLink>
          <FooterLink routeBasename="products">Products</FooterLink>
          <FooterLink routeBasename="wheretobuy">Where to buy</FooterLink>
          <FooterLink routeBasename="contact">Contact</FooterLink>
        </div>

      </div>
    </div>

  </div>
</template>
