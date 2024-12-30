<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import ImagePanel from './Partials/ImagePanel.vue'
import MobileImage from './Partials/MobileImage.vue'
import AboutDisclosure from './Partials/AboutDisclosure.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>

  <PageWrapper>

    <div>
      <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t("about.h1")}}</h1>

      <div class="mt-10 max-w-2xl">
        <p>{{$t('about.summary')}}</p>
      </div>
    </div>

    <!-- Mobile image -->
    <MobileImage
      class="sm:hidden mt-8"
      :imgFile="null"
      :imgAlt="null"
    />

    <!-- Then -->
    <ImagePanel
      class="mt-8 sm:mt-10 "
      title="Then"
      :imgFile="null"
      :imgAlt="null"
    >
      <!-- <p>{{$t('about.then')}}</p> -->
      <AboutDisclosure summary="The farm lies on the property of the former Ramšak family, who throughout 1800s and 1900s maintained a thriving and respected homestead, raising livestock, cultivating large crop fields in the unforgiving mountainous terrain, practicing forestry, and operating a grain mill and sawmill.">
        <template #details>
          <p>But for lack of a younger generation to take over, the once-thriving property gradually fell into abandonment in the 2000s, with only the old-growth orchards of tall-trunk fruit trees standing the test of time.</p>

          <p class="mt-2">Dominik, the last remaining member of the once-strong family still living on the property, kept up small-scale farming while his health allowed, operating as Center Gaia d.o.o. and selling apple juice, cider vinegar, and herbal products. But worsening health problems forced him to scale down production and eventually sell the property in 2023, with production and business all but fallow.</p>
        </template>
      </AboutDisclosure>

    </ImagePanel>

    <!-- Now -->
    <ImagePanel
      class="mt-8 sm:mt-10 "
      title="Now"
      :imgFile="null"
      :imgAlt="null"
    >
      <!-- <p>{{$t('about.now')}}</p> -->
      <AboutDisclosure summary="The property was purchased by the Mastnak family in 2023. Although having no pretense of becoming career farmers, father and son—Tomaž and Elijan—began reviving the farm and slowly re-planting fallow fields, repairing neglected buildings, and planting a new generation of fruit trees.">
        <template #details>

          <p>With the help of Dominik, the last remaining member of the Ramšak family to live on the property, we learned and now continue to make apple juice, cider vinegar, and related products from the produce grown on the farm.</p>

          <p class="mt-2">In 2024, Elijan took over and revived the business side left by Dominik, preserving the Center Gaia d.o.o. company, under which we continue to do business. Although formally educated in physics and working primarily in software, Elijan took to learning the ropes of running a small business with enthusiasm, and currently manages the farm's sales, bookkeeping, graphic design, and website in-house.</p>

          <p class="mt-2">We now run a small side business selling the products produced on the farm, and continue to maintain the tradition of small-scale, sustainable agriculture left behind by the generations before us.</p>
        </template>
      </AboutDisclosure>

    </ImagePanel>

  </PageWrapper>

</template>
