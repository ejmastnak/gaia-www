<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import jabsokPropImage from '@/assets/img/jabsok-prop.jpg'
import applesCrateImage from '@/assets/img/apples-crate.jpg'
</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('jabsok.title')}}</h1>

    <!-- Breadcrumb -->
    <p class="ml-px mt-1.5 text-base text-gray-600">
      <I18nRouterLink routeBasename="products">{{$t('products.h1')}}</I18nRouterLink>
      <span> > </span>
      <I18nRouterLink routeBasename="jabsok">{{$t('jabsok.title')}}</I18nRouterLink>
    </p>

    <!-- Summary -->
    <SimpleImagePanel 
      class="mt-10"
      :imgFile="jabsokPropImage"
      :imgAlt="$t('imgAlts.jabsokProp')"
    >
      <p>{{$t('jabsok.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">{{$t('jabsok.bio')}}</p>
    </SimpleImagePanel>

    <!-- Production -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="false"
      :imgFile="applesCrateImage"
      :imgAlt="$t('imgAlts.applesCrate')"
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
    <p class="mt-8 md:mt-12 max-w-xl">
      {{$t('jabsok.price[0]')}}
      <span class="font-bold">{{$t('jabsok.price[1]')}}</span>
      {{$t('jabsok.price[2]')}}
    </p>


  </PageWrapper>

</template>
