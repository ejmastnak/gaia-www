<script setup>
import ImagePanel from '@/Components/ImagePanel.vue'
import sntoljJarsImage from '@/assets/img/sntolj-jars.jpg?w=600'
import jabsokPropImage from '@/assets/img/jabsok-prop.jpg?w=600'
import kisCisternsImage from '@/assets/img/kis-cisterns.jpg?w=600'
</script>

<template>

  <div>

    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">{{$t('home.products.title')}}</h2>

    <ImagePanel
      class="mt-8 md:mt-12"
      :reverse="true"
      :imgFile="jabsokPropImage"
      :imgAlt="$t('imgAlts.jabsokProp')"
      :title="$t('home.products.jabsok.title')"
      routeBasename="jabsok"
    >
      {{$t("jabsok.summary")}}
    </ImagePanel>

    <ImagePanel
      class="mt-8 md:mt-16"
      :reverse="false"
      :imgFile="kisCisternsImage"
      :imgAlt="$t('imgAlts.kisCisterns')"
      :title="$t('home.products.jabkis.title')"
      routeBasename="jabkis"
    >
      {{$t("jabkis.summary")}}
    </ImagePanel>

    <ImagePanel
      class="mt-8 md:mt-16"
      :reverse="true"
      :imgFile="sntoljJarsImage"
      :imgAlt="$t('imgAlts.sntoljJars')"
      :title="$t('home.products.sntolj.title')"
      routeBasename="sntolj"
    >
      {{$t('home.products.sntolj.summaryAddendum')}}
    </ImagePanel>

  </div>

</template>
