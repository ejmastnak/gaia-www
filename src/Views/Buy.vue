<script setup>
import { inject } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import PageWrapper from '@/Shared/PageWrapper.vue'
import PriceList from '@/Shared/PriceList.vue'
import Disclosure from '@/Components/Disclosure.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import orehTreeImage from '@/assets/img/oreh-tree.jpg?w=600'

const products = inject('products')

</script>

<template>

  <PageWrapper>

    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('buy.h1')}}</h1>

    <!-- -mr moves image rightward -->
    <div class="mt-10 lg:flex space-x-16 lg:-mr-12">
      <div>

        <!-- Contact us directly to order -->
        <div>
          <p class="font-bold">{{$t('buy.contactUsHeading')}}</p>
          <p class="mt-1">
            {{$t('buy.contactUs[0]')}}
            <I18nRouterLink class="inline text-blue-600" routeBasename="contact">{{$t('buy.contactUs[1]')}}</I18nRouterLink>
            <span>{{$t('buy.contactUs[2]')}}</span>
          </p>
        </div>

        <!-- E-shop -->
        <div class="mt-5">
          <p class="font-bold">{{$t('buy.eshopHeading')}}</p>
          <p class="">{{$t('buy.eshop')}}</p>
          <div class="mt-3">
            <PrimaryLink class="inline-flex items-center gap-x-1.5" :asAnchor="true" href="https://shop.gaia.si">
              <span>{{$t('buy.eshopLink')}}</span>
              <ArrowTopRightOnSquareIcon class="size-5 text-white shrink-0" />
            </PrimaryLink>
          </div>
        </div>

      </div>

      <img 
      :src="orehTreeImage"
      :alt="$t('imgAlts.orehTree')"
      class="hidden lg:block mx-auto !w-96 h-80 object-cover rounded-md"
    />

    </div>

    <!-- Price list -->
    <div class="mt-10">
      <h2 class="text-2xl font-['Latin_Modern_Roman']">{{$t('buy.priceList')}}</h2>
      <PriceList class="mt-4" :products="products" />
      <p class="mt-5 max-w-2xl">{{$t('partials.priceList.bottleToOrder[0]')}} {{$t('partials.priceList.bottleToOrder[1]')}} {{$t('partials.priceList.bottleToOrder[2]')}}</p>
    </div>

    <!-- Delivery -->
    <div class="mt-8 max-w-2xl">
      <h2 class="text-2xl font-['Latin_Modern_Roman']">{{$t('buy.delivery.heading')}}</h2>
      <p class="mt-1">{{$t('buy.delivery.body')}}</p>
    </div>

  </PageWrapper>

</template>
