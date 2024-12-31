<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('sntolj.title')}}</h1>

    <!-- Summary -->
    <SimpleImagePanel 
      class="mt-10"
      :imgFile="null"
      :imgAlt="null"
    >
      <p>{{$t('sntolj.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">{{$t('sntolj.bio')}}</p>
    </SimpleImagePanel>

    <!-- Production -->
    <SimpleImagePanel 
      class="mt-16"
      :reverse="false"
      :imgFile="null"
      :imgAlt="null"
    >
      <p class="mt-5">{{$t('sntolj.production[0]')}}</p>
      <p class="mt-5">{{$t('sntolj.production[1]')}}</p>
    </SimpleImagePanel>

    <!-- Uses -->
    <SimpleImagePanel 
      class="mt-16"
      :reverse="true"
      :imgFile="null"
      :imgAlt="null"
    >
      <p>{{$t('sntolj.uses.header')}}</p>
      <ul class="mt-3 ml-5 list-disc">
        <li>{{$t('sntolj.uses.list[0]')}}</li>
        <li>{{$t('sntolj.uses.list[1]')}}</li>
        <li>{{$t('sntolj.uses.list[2]')}}</li>
        <li>{{$t('sntolj.uses.list[3]')}}</li>
      </ul>
      <p class="mt-3">{{$t('sntolj.uses.footer')}}</p>
    </SimpleImagePanel>

    <p class="mt-12 max-w-xl">
      <span class="font-bold">{{$t('sntolj.contraindications[0]')}}</span>
      {{$t('sntolj.contraindications[1]')}}
    </p>

    <!-- Prices -->
    <p class="mt-8 max-w-xl">
      {{$t('sntolj.price[0]')}}
      <span class="font-bold">{{$t('sntolj.price[1]')}}</span>
      {{$t('sntolj.price[2]')}}
    </p>



  </PageWrapper>

</template>
