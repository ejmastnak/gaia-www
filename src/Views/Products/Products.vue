<script setup>
import { inject } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import PriceList from '@/Shared/PriceList.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import Bio from '@/Shared/Bio.vue'
import ImagePanel from '@/Components/ImagePanel.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import Hero from './Partials/Hero.vue'
import jabsokPropImage from '@/assets/img/jabsok-prop.jpg?w=800'
import jabkisPropImage from '@/assets/img/jabkis-prop.jpg?w=800'
import sntoljImage from '@/assets/img/sntolj.jpg?w=800'

const products = inject('products')

</script>

<template>

  <div class="mx-auto">

    <Hero class="w-screen" />

    <div class="max-w-5xl mx-auto relative px-2">

      <div class="xs:mt-10 md:mt-4 px-2 mx-auto">
        <Bio class="max-w-4xl mx-auto" />
      </div>

      <div class="mt-10 md:mt-14 space-y-10 md:space-y-16">

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

      <!-- Price list -->
      <div class="mt-8 px-2">
        <h2 class="text-2xl font-['Latin_Modern_Roman']">{{$t('buy.priceList')}}</h2>
        <p class="text-gray-500 text-base">{{$t('buy.ddv')}}</p>
        <PriceList class="mt-3" :products="products" />
        <p class="mt-5 max-w-2xl">
          <span class="font-bold">{{$t('shared.bottleToOrderHeading')}}</span>
          {{$t('shared.bottleToOrder')}}
        </p>
      </div>

    </div>


</div>

</template>
