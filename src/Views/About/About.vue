<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import ImagePanel from './Partials/ImagePanel.vue'
import MobileImage from './Partials/MobileImage.vue'
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
    <MobileImage class="sm:hidden mt-8" :imgFile="null" :imgAlt="null" />

    <!-- Then -->
    <ImagePanel
      class="mt-8 sm:mt-10 "
      title="Then"
      :imgFile="null"
      :imgAlt="null"
    >
      <p>{{$t('about.then')}}</p>
    </ImagePanel>


    <!-- Now -->
    <ImagePanel
      class="mt-8 sm:mt-10 "
      title="Now"
      :imgFile="null"
      :imgAlt="null"
    >
      <p>{{$t('about.now')}}</p>
    </ImagePanel>

  </PageWrapper>

</template>
