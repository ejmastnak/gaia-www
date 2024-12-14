<script setup>
import FooterLink from './Partials/FooterLink.vue'
</script>

<template>
  <div>
    <!-- Background pattern -->
    <svg
      viewBox="0 0 200 20"
      version="1.1"
      id="svg5"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
      <defs
        id="defs2" />
      <g
        id="layer1">
        <path
          style="fill:#000000;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="M 0.5,0.61317271 V 20.570374 H 224.44529 V 9.1832441 c 0,0 -41.39009,6.0293899 -60.77218,6.2291399 C 141.05342,15.645494 119.13752,5.7368527 96.5168,5.6463527 86.62286,5.6067527 77.00447,9.6773541 67.11045,9.6827141 44.7021,9.6948141 0.5,0.61317271 0.5,0.61317271 Z"
          id="path3953" />
      </g>
    </svg>

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
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Products</FooterLink>
          <FooterLink href="#">Where to buy</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </div>

      </div>
    </div>

  </div>
</template>
