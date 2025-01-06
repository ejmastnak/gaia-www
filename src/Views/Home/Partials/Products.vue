<script setup>
import ImagePanel from '@/Components/ImagePanel.vue'
import sntoljImage from '@/assets/img/sntolj.jpg'
import applesImage from '@/assets/img/apples.jpg'
</script>

<template>

  <div>

    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">{{$t('home.products.title')}}</h2>

    <ImagePanel
      class="mt-8 md:mt-12"
      :reverse="true"
      :imgFile="applesImage"
      :imgAlt="$t('imgAlts.apples')"
      :title="$t('home.products.jabsok.title')"
      routeBasename="jabsok"
    >
      {{$t("jabsok.summary")}}
    </ImagePanel>

    <ImagePanel
      class="mt-8 md:mt-16"
      :reverse="false"
      :imgFile="null"
      :imgAlt="null"
      :title="$t('home.products.jabkis.title')"
      routeBasename="jabkis"
    >
      {{$t("jabkis.summary")}}
    </ImagePanel>

    <ImagePanel
      class="mt-8 md:mt-16"
      :reverse="true"
      :imgFile="sntoljImage"
      :imgAlt="$t('imgAlts.sntolj')"
      :title="$t('home.products.sntolj.title')"
      routeBasename="sntolj"
    >
      {{$t("sntolj.summary")}}
      {{$t('home.products.sntolj.summaryAddendum')}}
    </ImagePanel>

  </div>

</template>
