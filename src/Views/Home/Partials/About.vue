<script setup>
import ImagePanel from '@/Components/ImagePanel.vue'
</script>

<template>

  <div>
    <!-- Title -->
    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">{{$t("home.partialTitles.about")}}</h2>

    <ImagePanel
      class="mt-6 md:mt-12"
      :reverse="false"
      :imgFile="null"
      :imgAlt="null"
      :title="null"
      routeBasename="about"
    >
      {{$t("about.summary")}}
    </ImagePanel>

  </div>

</template>
