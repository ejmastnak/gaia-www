<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import AboutImagePanel from './Partials/AboutImagePanel.vue'
import MobileImage from './Partials/MobileImage.vue'
import AboutDisclosure from './Partials/AboutDisclosure.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import fallLeavesImage from '@/assets/img/fall-leaves.jpg'
import appleBlossomsImage from '@/assets/img/apple-blossoms.jpg'
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
      :imgFile="fallLeavesImage"
      :imgAlt="$t('imgAlts.fallLeaves')"
    />

    <!-- Then -->
    <AboutImagePanel
      class="mt-8 sm:mt-10 "
      :title="$t('about.then.title')"
      :imgFile="fallLeavesImage"
      :imgAlt="$t('imgAlts.fallLeaves')"
    >
      <AboutDisclosure :summary="$t('about.then.text[0]')">
        <template #details>
          <p class="mt-4">{{$t('about.then.text[1]')}}</p>
        </template>
      </AboutDisclosure>

    </AboutImagePanel>

    <!-- Mobile image -->
    <MobileImage
      class="sm:hidden mt-6"
      :imgFile="appleBlossomsImage"
      :imgAlt="$t('imgAlts.appleBlossoms')"
    />

    <!-- Now -->
    <AboutImagePanel
      class="mt-8 sm:mt-10 "
      :title="$t('about.now.title')"
      :imgFile="appleBlossomsImage"
      :imgAlt="$t('imgAlts.appleBlossoms')"
    >
      <AboutDisclosure :summary="$t('about.now.text[0]')">
        <template #details>
          <p class="mt-4">{{$t('about.now.text[1]')}}</p>
          <p class="mt-4">{{$t('about.now.text[2]')}}</p>
          <p class="mt-4">{{$t('about.now.text[3]')}}</p>
        </template>
      </AboutDisclosure>

    </AboutImagePanel>

  </PageWrapper>

</template>
