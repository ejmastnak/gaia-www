<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('jabkis.title')}}</h1>

    <!-- Summary -->
    <SimpleImagePanel 
      class="mt-10"
      :imgFile="null"
      :imgAlt="null"
    >
      <p>{{$t('jabkis.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">{{$t('jabkis.bio')}}</p>
    </SimpleImagePanel>

    <!-- Production 1 -->
    <SimpleImagePanel 
      class="mt-16"
      :reverse="false"
      :imgFile="null"
      :imgAlt="null"
    >
      <p>
        {{$t('jabkis.appleVarieties[0]')}}
        <span class="font-bold">{{$t('jabkis.appleVarieties[1]')}}</span>
        {{$t('jabkis.appleVarieties[2]')}}
      </p>
      <p class="mt-5">{{$t('jabkis.production[0]')}}</p>
    </SimpleImagePanel>

    <!-- Production 2 -->
    <SimpleImagePanel 
      class="mt-16"
      :imgFile="null"
      :imgAlt="null"
      :reverse="true"
    >
      <p>{{$t('jabkis.production[1]')}}</p>
      <p class="mt-5">{{$t('jabkis.production[2]')}}</p>
    </SimpleImagePanel>

    <!-- Production 3 -->
    <SimpleImagePanel 
      class="mt-16"
      :imgFile="null"
      :imgAlt="null"
      :reverse="false"
    >
      <p>{{$t('jabkis.production[3]')}}</p>
    </SimpleImagePanel>

    <!-- Price -->
    <p class="mt-12 max-w-xl">
      {{$t('jabkis.price[0]')}}
      <span class="font-bold">{{$t('jabkis.price[1]')}}</span>
      {{$t('jabkis.price[2]')}}
    </p>

  </PageWrapper>

</template>
