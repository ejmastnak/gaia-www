<script setup>
import ImagePanel from '@/Components/ImagePanel.vue'
import travnikiFallImage from '@/assets/img/travniki-fall.jpg?w=700'
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
      {{$t("home.about.text")}}
    </ImagePanel>

  </div>

</template>
