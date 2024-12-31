<script setup>
import ImagePanel from '@/Components/ImagePanel.vue'
</script>

<template>

  <div>

    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">{{$t('home.products.title')}}</h2>

    <ImagePanel
      class="mt-5 md:mt-12"
      :reverse="true"
      :imgFile="null"
      :imgAlt="null"
      :title="$t('home.products.jabsok.title')"
      routeBasename="jabsok"
    >
      {{$t("jabsok.summary")}}
    </ImagePanel>

    <ImagePanel
      class="mt-8 md:mt-16"
      :reverse="false"
      :imgFile="null"
      imgAlt="null"
      :title="$t('home.products.jabkis.title')"
      routeBasename="jabkis"
    >
      {{$t("jabkis.summary")}}
    </ImagePanel>

    <ImagePanel
      class="mt-5 md:mt-16"
      :reverse="true"
      :imgFile="null"
      imgAlt="null"
      :title="$t('home.products.sntolj.title')"
      routeBasename="sntolj"
    >
      {{$t("sntolj.summary")}}
      {{$t('home.products.sntolj.summaryAddendum')}}
    </ImagePanel>

  </div>

</template>
