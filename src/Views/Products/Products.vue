<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import ImagePanel from '@/Components/ImagePanel.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('products.h1')}}</h1>

    <div class="mt-10 max-w-xl">
      <p>{{$t('products.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">{{$t('products.bio')}} </p>
    </div>

    <div class="mt-10 md:mt-16 space-y-10 md:space-y-16">

      <ImagePanel
        :reverse="true"
        :imgFile="null"
        :imgAlt="null"
        :title="$t('jabsok.title')"
        routeBasename="jabsok"
        :headingLink="true"
      >
        {{$t("jabsok.summary")}}
      </ImagePanel>

      <ImagePanel
        :reverse="false"
        :imgFile="null"
        imgAlt="null"
        :title="$t('jabkis.title')"
        routeBasename="jabkis"
        :headingLink="true"
      >
        {{$t("jabkis.summary")}}
      </ImagePanel>

      <ImagePanel
        :reverse="true"
        :imgFile="null"
        imgAlt="null"
        :title="$t('sntolj.title')"
        routeBasename="sntolj"
        :headingLink="true"
      >
        {{$t("sntolj.summary")}}
      </ImagePanel>

    </div>

  </PageWrapper>

</template>
