<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/ImagePanelSimple.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('products.jabkis.h1')}}</h1>

    <SimpleImagePanel 
      class="mt-6 md:mt-10"
      :imgFile="null"
      :imgAlt="null"
    >
      <!-- {{$t('products.jabkis.summary')}} -->
      <p class="">
        Our production of apple cider vinegar goes hand in hand with the pressing of apple juice each fall—we make our vinegar from the pulp and residual juice left over from the pressing process.
        Using pulp as a primary raw ingredient, together with diverse heirloom varieties and a slow fermentation all winter long, gives our vinegar a smoothness, gentleness, and complexity not found in conventional vinegar made only from fermented apple juice. 
      </p>

      <p class="mt-2">
        Apples used to make our vinegar include Jonatan, Carjevič, Krivopecelj, Ovčji nos, Šampanjska reneta, Kanadka, Mošancelj, Zlata parmena, Gravenstein, Londonski peping, Bobovec, and other traditional varieties growing on our farm whose formal names we do not even know! 
      </p>

      <p class="mt-2">
        Our farm, apples, and vinegar are completely free of pesticides, herbicides, and all other synthetic agrochemicals. Although we don't yet have an official certification, our vinegar is effectively BIO all but in name.
      </p>

    </SimpleImagePanel>

    <div class="mt-4 max-w-xl">
      <p class="">
        Apples are hand-picked in October and November; carefully washed; then ground, crushed, and pressed to extract the juice.
        We then use the pulp and residual juice to make our vinegar.
      </p>

      <p class="mt-2">
        We make the vinegar with a multi-stage fermentation process.
        First, an alchoholic fermentation converts the pulp and juice into apple cider.
        We then mix the pulp and cider with spring water from our own wells, inoculate the mixture with mother from previous batches, and carry out a longer, lower-temperature acetic fermentation that converts the alcohol in the cider to acetic acid, producing vinegar.
        In parallel, a malolactic fermentation converts the malic acid in the apples to gentler acetic acid, mellowing the vinegar's acidity and sharpness.
      </p>

      <p class="mt-2">
        After a gentle fermentation over 3-4 weeks, we then strain the liquid vinegar from the apple solids and set aside the fresh vinegar to slowly mature over the course of the winter, during which compounds and microorganisms in the vinegar continue to interact, developing complexity, flavor, and mellowing the fresh vinegar's sharpness.

        The result is a gentle vinegar with superb flavor, free of the harshness of fast-fermented industrial vinegars.
      </p>

      <p class="mt-2">
        Our vinegar is unfiltered and unpasteurized to preserve flavor, body, and the activity of beneficial microorganisms.
      </p>


      <p class="mt-2">
        Retail prices range from 2.00€ to 2.50€ per liter, depending on packaging and quantity.
      </p>
    </div>

  </PageWrapper>

</template>
