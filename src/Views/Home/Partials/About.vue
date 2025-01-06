<script setup>
import ImagePanel from '@/Components/ImagePanel.vue'
import travnikiFallImage from '@/assets/img/travniki-fall.jpg'
</script>

<template>

  <div>
    <!-- Title -->
    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">{{$t("home.about.title")}}</h2>

    <ImagePanel
      class="mt-6 md:mt-12"
      :reverse="false"
      :imgFile="travnikiFallImage"
      :imgAlt="$t('imgAlts.travnikiFall')"
      :title="null"
      routeBasename="about"
    >
      {{$t("about.summary")}}
    </ImagePanel>

  </div>

</template>
