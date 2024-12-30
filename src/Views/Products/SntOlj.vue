<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/ImagePanelSimple.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('products.sntolj.h1')}}</h1>

    <SimpleImagePanel 
      class="mt-6 md:mt-10"
      :imgFile="null"
      :imgAlt="null"
    >
      <!-- {{$t('products.sntolj.summary')}} -->
      <p class="">
        Saint John's Wort oil is an herbal product made by infusing the flowers of the Saint John's Wort plant in a carrier oil. It is traditionally used in Slovenia to sooth and heal damaged skin after minor burns and scrapes, to sooth aching joints, to relieve nerve pain, and as a luxurious massage oil.
      </p>

      <p class="mt-2">
        We make our oil from St. John's Wort flowers hand-picked from meadows on our mountain pastures.
        The flowers are steeped in organic extra-virgin olive oil and left to macerate over a period of 4-6 weeks, during which the hypericin in the St. John's Wort flowers infuses into the carrier oil, producing a distinctive, deeply crimson-colored oil rich with therapeutic compounds.

        We then strain the oil to remove the plant solids, leaving behind the prepared St. John's Wort oil.
      </p>

    </SimpleImagePanel>

    <div class="mt-5 max-w-2xl">

      <p>St. John's Wort oil has been used for centuries in traditional herbal medicine throughout Central Europe.
        When massaged into the skin surface, purported—and in many cases scientifically-backed—benefits include:</p>

      <ul class="mt-2 ml-5 list-disc">
        <li>Relief of nerve pain</li>
        <li>Relief of aching joints</li>
        <li>Healing of burns, scrapes, and bruises</li>
        <li>Improved circulation at the skin surface</li>
      </ul>

      <p class="mt-2">And, although conventional medicine might challenge some of its benefits, St. John's Wort oil is a luxurious and soothing massage oil regardless of its medicinal properties.</p>

      <p class="mt-2">
        Our farm and St. John's Wort are completely free of pesticides, herbicides, and all other synthetic agrochemicals, and the flowers are steeped in organic extra virgin olive oil.
        So although we don't yet have an official certification, our St. John's Wort oil is effectively BIO all but in name. 
      </p>

      <p class="mt-2">
        <span class="font-bold">Contraindications:</span>
        the hypericin in St. John's Wort can cause photosensitivity—increased sensitivity of the skin to sun exposure.
        After using St. John's Wort oil, it is prudent to wait 12-24 hours after application before intense sun exposure.
      </p>

    </div>



  </PageWrapper>

</template>
