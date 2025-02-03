<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import jabkisPropImage from '@/assets/img/jabkis-prop.jpg?w=800'
import applesCrateImage from '@/assets/img/apples-crate.jpg?w=700'
import kisCisternsImage from '@/assets/img/kis-cisterns.jpg?w=800'
import presaBarrelImage from '@/assets/img/presa-barrel-2.jpg?w=800'
</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('jabkis.title')}}</h1>

    <!-- Breadcrumb -->
    <p class="ml-px mt-2 text-base text-gray-600">
      <I18nRouterLink routeBasename="products">{{$t('products.h1')}}</I18nRouterLink>
      <span> > </span>
      <I18nRouterLink routeBasename="jabkis">{{$t('jabkis.title')}}</I18nRouterLink>
    </p>

    <!-- Summary -->
    <SimpleImagePanel 
      class="mt-10"
      :imgFile="jabkisPropImage"
      :imgAlt="$t('imgAlts.jabkisProp')"
    >
      <p>{{$t('jabkis.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">{{$t('jabkis.bio')}}</p>
    </SimpleImagePanel>

    <!-- Production 1 -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :reverse="false"
      :imgFile="applesCrateImage"
      :imgAlt="$t('imgAlts.applesCrate')"
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
      class="mt-5 md:mt-16"
      :imgFile="presaBarrelImage"
      :imgAlt="$t('imgAlts.presaBarrel')"
      :reverse="true"
    >
      <p>{{$t('jabkis.production[1]')}}</p>
      <p class="mt-5">{{$t('jabkis.production[2]')}}</p>
    </SimpleImagePanel>

    <!-- Production 3 -->
    <SimpleImagePanel 
      class="mt-5 md:mt-16"
      :imgFile="kisCisternsImage"
      :imgAlt="$t('imgAlts.kisCisterns')"
      :reverse="false"
    >
      <p>{{$t('jabkis.production[3]')}}</p>
    </SimpleImagePanel>

    <!-- Price -->
    <p class="mt-8 md:mt-12 max-w-xl">
      {{$t('jabkis.price[0]')}}
      <span class="font-bold">{{$t('jabkis.price[1]')}}</span>
      {{$t('jabkis.price[2]')}}
    </p>

  </PageWrapper>

</template>
