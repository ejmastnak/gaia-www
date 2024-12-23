<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/ImagePanelSimple.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('products.jabkis.h1')}}</h1>

    <SimpleImagePanel 
      class="mt-6 md:mt-10"
      :imgFile="null"
      :imgAlt="null"
    >
      {{$t('products.jabkis.summary')}}
    </SimpleImagePanel>

  </PageWrapper>

</template>
