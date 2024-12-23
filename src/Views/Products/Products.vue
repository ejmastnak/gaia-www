<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import ImagePanel from '@/Components/ImagePanel.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('products.index.h1')}}</h1>

    <p class="mt-10 max-w-xl text-lg lg:text-xl text-gray-800">
      {{$t('products.index.summary')}}
    </p>

    <div>

      <ImagePanel
        class="mt-5 md:mt-16"
        :reverse="true"
        :imgFile="null"
        :imgAlt="null"
        :title="$t('products.jabsok.name')"
        routeBasename="jabsok"
      >
        {{$t("products.jabsok.summary")}}
      </ImagePanel>

      <ImagePanel
        class="mt-8 md:mt-16"
        :reverse="false"
        :imgFile="null"
        imgAlt="null"
        :title="$t('products.jabkis.name')"
        routeBasename="jabkis"
      >
        {{$t("products.jabkis.summary")}}
      </ImagePanel>

      <ImagePanel
        class="mt-5 md:mt-16"
        :reverse="true"
        :imgFile="null"
        imgAlt="null"
        :title="$t('products.sntolj.name')"
        routeBasename="sntolj"
      >
        {{$t("products.sntolj.summary")}}
      </ImagePanel>

    </div>

  </PageWrapper>

</template>
