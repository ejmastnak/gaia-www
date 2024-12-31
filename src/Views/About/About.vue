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
      :title="$t('about.then.title')"
      :imgFile="null"
      :imgAlt="null"
    >
      <AboutDisclosure :summary="$t('about.then.text[0]')">
        <template #details>
          <p>{{$t('about.then.text[1]')}}</p>
          <p class="mt-2">{{$t('about.then.text[2]')}}</p>
        </template>
      </AboutDisclosure>

    </ImagePanel>

    <!-- Now -->
    <ImagePanel
      class="mt-8 sm:mt-10 "
      :title="$t('about.now.title')"
      :imgFile="null"
      :imgAlt="null"
    >
      <AboutDisclosure :summary="$t('about.now.text[0]')">
        <template #details>
          <p>{{$t('about.now.text[1]')}}</p>
          <p class="mt-2">{{$t('about.now.text[2]')}}</p>
          <p class="mt-2">{{$t('about.now.text[3]')}}</p>
        </template>
      </AboutDisclosure>

    </ImagePanel>

  </PageWrapper>

</template>
