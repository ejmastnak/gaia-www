<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/ImagePanelSimple.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('products.jabsok.h1')}}</h1>

    <SimpleImagePanel 
      class="mt-6 md:mt-10"
      :imgFile="null"
      :imgAlt="null"
    >
      {{$t('products.jabsok.summary')}}

      <p class="mt-2">
        Apples include Jonatan, Carjevič, Krivopecelj, Ovčji nos, Šampanjska reneta, Kanadka, Mošancelj, Zlata parmena, Gravenstein, Londonski peping, Bobovec, and other traditional varieties growing on our farm whose formal names we do not even know!
      </p>

      <p class="mt-2">
        Our farm, apples, and juice are completely free of pesticides, herbicides, and all other synthetic agrochemicals.
        Although we don't yet have an official certification, our juice is effectively BIO all but in name. 
      </p>

    </SimpleImagePanel>

    <div class="mt-4 max-w-xl">

      <p>
        Apples are hand-picked in October and November; carefully washed; then ground, crushed, and pressed to extract the juice—we still press our apples manually in traditional wood-barrel presses.
      </p>

      <p class="mt-2">
        The pressed juice is aged overnight at low temperature to mellow and develop flavor, then low-temperature pasteurized in a coil-and-tube heat exchanger and immediately bottled and hermetically sealed, ready for consumption.
      </p>

      <p class="mt-2">
        Retail prices range from 2.00€ to 3.00€ per liter, depending on packaging and quantity.
      </p>
    </div>

  </PageWrapper>

</template>
