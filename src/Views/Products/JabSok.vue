<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('jabsok.title')}}</h1>

    <!-- Summary -->
    <SimpleImagePanel 
      class="mt-10"
      :imgFile="null"
      :imgAlt="null"
    >
      <p>{{$t('jabsok.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">{{$t('jabsok.bio')}}</p>
    </SimpleImagePanel>

    <!-- Production -->
    <SimpleImagePanel 
      class="mt-16"
      :reverse="false"
      :imgFile="null"
      :imgAlt="null"
    >
      <p>
        {{$t('jabsok.appleVarieties[0]')}}
        <span class="font-bold">{{$t('jabsok.appleVarieties[1]')}}</span>
        {{$t('jabsok.appleVarieties[2]')}}
      </p>
      <p class="mt-5">{{$t('jabsok.production[0]')}}</p>
      <p class="mt-5">{{$t('jabsok.production[1]')}}</p>
    </SimpleImagePanel>

    <!-- Prices -->
    <p class="mt-12 max-w-xl">
      {{$t('jabsok.price[0]')}}
      <span class="font-bold">{{$t('jabsok.price[1]')}}</span>
      {{$t('jabsok.price[2]')}}
    </p>


  </PageWrapper>

</template>
