<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Disclosure from '@/Components/Disclosure.vue'
import orehTreeImage from '@/assets/img/oreh-tree.jpg'
</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('whereToBuy.h1')}}</h1>

    <!-- -mr moves image rightward -->
    <div class="mt-10 lg:flex space-x-16 lg:-mr-12">
      <div class="">
        {{$t('whereToBuy.intro')}}
        <ul class="mt-5 space-y-2">
          <li>
            <Disclosure>
              <template #summary>
                {{$t('whereToBuy.waystobuy.farm.summary')}}
              </template>
              <template #details>
                <p>
                  <I18nRouterLink class="inline" :colored="true" routeBasename="contact">{{$t('whereToBuy.waystobuy.farm.details[0]')}}</I18nRouterLink>
                  {{$t('whereToBuy.waystobuy.farm.details[1]')}}
                  <span class="font-bold">{{$t('whereToBuy.waystobuy.farm.details[2]')}}</span>
                  <span v-if="$t('whereToBuy.waystobuy.farm.details[3]')" class="">{{$t('whereToBuy.waystobuy.farm.details[3]')}}</span>
                </p>

              </template>
            </Disclosure>
          </li>
          <li>
            <Disclosure>
              <template #summary>
                {{$t('whereToBuy.waystobuy.koroska.summary')}}
              </template>
              <template #details>
                <p>{{$t('whereToBuy.waystobuy.koroska.details[0]')}}</p>
                <p class="mt-1">
                  <I18nRouterLink class="inline" :colored="true" routeBasename="contact">{{$t('whereToBuy.waystobuy.koroska.details[1]')}}</I18nRouterLink>
                  {{$t('whereToBuy.waystobuy.koroska.details[2]')}}
                </p>
              </template>
            </Disclosure>
          </li>
          <li>
            <Disclosure>
              <template #summary>
                {{$t('whereToBuy.waystobuy.ljubljana.summary')}}
              </template>
              <template #details>
                <p>{{$t('whereToBuy.waystobuy.ljubljana.details[0]')}}</p>
                <p class="mt-2">
                  <I18nRouterLink class="inline" :colored="true" routeBasename="contact">{{$t('whereToBuy.waystobuy.ljubljana.details[1]')}}</I18nRouterLink>
                  {{$t('whereToBuy.waystobuy.ljubljana.details[2]')}}
                </p>
              </template>
            </Disclosure>
          </li>
        </ul>

        <div class="mt-5 max-w-xl">
          <p>
            <strong class="font-bold">{{$t('whereToBuy.waystobuy.largeOrders.summary')}}</strong>
            {{$t('whereToBuy.waystobuy.largeOrders.details')}}
          </p>
        </div>

      </div>

      <img 
      :src="orehTreeImage"
      :alt="$t('imgAlts.orehTree')"
      class="hidden lg:block mx-auto !w-96 h-80 object-cover rounded-md"
    />

    </div>
  </PageWrapper>

</template>
