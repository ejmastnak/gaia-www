<script setup>
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Disclosure from '@/Components/Disclosure.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import orehTreeImage from '@/assets/img/oreh-tree.jpg?w=600'

const { t, locale } = useI18n()
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

        <!-- Table of products -->
        <div class="mt-8">
          <p class="font-bold">{{$t('buy.priceList.heading')}}</p>
          <div class="mt-3">
            <div class="grid grid-cols-12">
              <p class="col-span-7 px-3 py-2 bg-orange-100">{{$t('buy.priceList.product')}}</p>
              <p class="col-span-5 px-3 py-2 bg-orange-200">{{$t('buy.priceList.price')}}</p>
            </div>
            <div class="grid grid-cols-12 border-b py-1 !text-left text-nowrap" >

              <!-- Names -->
              <template v-for="product in products" :key="product.name">
                <p class="col-span-7 px-3 py-1">{{product.name[locale]}}</p>
                <span class="col-span-5 px-3 py-1">{{(product.eur_cents/100).toFixed(2)}} €</span>
              </template>

            </div>
          </div>
        </div>

        <p class="mt-5">{{$t('buy.bottleToOrder[0]')}} <span class="font-bold">{{$t('buy.bottleToOrder[1]')}}</span> {{$t('buy.bottleToOrder[2]')}}</p>

      </div>

      <img 
      :src="orehTreeImage"
      :alt="$t('imgAlts.orehTree')"
      class="hidden lg:block mx-auto !w-96 h-80 object-cover rounded-md"
    />

    </div>

    <!-- Delivery -->
    <div class="mt-10 max-w-2xl">
      <p>
        <span class="font-bold">{{$t('buy.delivery[0]')}}</span>
        {{$t('buy.delivery[1]')}}
      </p>
    </div>


  </PageWrapper>

</template>
