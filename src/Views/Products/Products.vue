<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import ImagePanel from '@/Components/ImagePanel.vue'
import OrderLink from '@/Components/OrderLink.vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import jabsokPropImage from '@/assets/img/jabsok-prop.jpg?w=800'
import jabkisPropImage from '@/assets/img/jabkis-prop.jpg?w=800'
import sntoljImage from '@/assets/img/sntolj.jpg?w=800'

</script>

<template>

  <PageWrapper>

    <div class="w-full flex items-center pr-2">
      <h1 class="text-5xl font-['Latin_Modern_Roman'] mr-2">{{$t('products.h1')}}</h1>
      <OrderLink class="ml-auto"/>
    </div>

    <div class="mt-10 max-w-xl">
      <p>{{$t('products.summary')}}</p>
      <p class="mt-2 text-base lg:text-lg italic text-gray-700">{{$t('products.bio')}} </p>
    </div>

    <div class="mt-10 md:mt-16 space-y-10 md:space-y-16">

      <ImagePanel
        :reverse="true"
        :imgFile="jabsokPropImage"
        :imgAlt="$t('imgAlts.jabsokProp')"
        :title="$t('jabsok.title')"
        routeBasename="jabsok"
        :headingLink="true"
      >
        {{$t("jabsok.summary")}}
      </ImagePanel>

      <ImagePanel
        :reverse="false"
        :imgFile="jabkisPropImage"
        :imgAlt="$t('imgAlts.jabkisProp')"
        :title="$t('jabkis.title')"
        routeBasename="jabkis"
        :headingLink="true"
      >
        {{$t("jabkis.summary")}}
      </ImagePanel>

      <ImagePanel
        :reverse="true"
        :imgFile="sntoljImage"
        :imgAlt="$t('imgAlts.sntolj')"
        :title="$t('sntolj.title')"
        routeBasename="sntolj"
        :headingLink="true"
      >
        {{$t("sntolj.summary")}}
      </ImagePanel>

    </div>

  </PageWrapper>

</template>
