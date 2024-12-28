<script setup>
import ImagePanel from '@/Components/ImagePanel.vue'
</script>

<template>

  <div>

    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">{{$t('home.partialTitles.products')}}</h2>

    <ImagePanel
      class="mt-5 md:mt-12"
      :reverse="true"
      :imgFile="null"
      :imgAlt="null"
      :title="$t('products.jabsok.name')"
      routeBasename="products"
    >
      {{$t("products.jabsok.summary")}}
    </ImagePanel>

    <ImagePanel
      class="mt-8 md:mt-16"
      :reverse="false"
      :imgFile="null"
      imgAlt="null"
      :title="$t('products.jabkis.name')"
      routeBasename="products"
    >
      {{$t("products.jabkis.summary")}}
    </ImagePanel>

    <ImagePanel
      class="mt-5 md:mt-16"
      :reverse="true"
      :imgFile="null"
      imgAlt="null"
      :title="$t('products.sntolj.name')"
      routeBasename="products"
    >
      {{$t("products.sntolj.summary")}}
    </ImagePanel>

  </div>

</template>
