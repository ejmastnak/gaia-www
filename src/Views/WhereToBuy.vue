<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Disclosure from '@/Components/Disclosure.vue'
</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('wheretobuy.h1')}}</h1>

    <div class="mt-10">
      {{$t('wheretobuy.intro')}}
      <ul class="mt-5 space-y-2">
        <li>
          <Disclosure>
            <template #summary>
              {{$t('wheretobuy.waystobuy.farm.summary')}}
            </template>
            <template #details>
              <p>
                <I18nRouterLink class="inline" :colored="true" routeBasename="contact">{{$t('wheretobuy.waystobuy.farm.details[0]')}}</I18nRouterLink>
                {{$t('wheretobuy.waystobuy.farm.details[1]')}}
                <span class="font-bold">{{$t('wheretobuy.waystobuy.farm.details[2]')}}</span>
                {{$t('wheretobuy.waystobuy.farm.details[3]')}}
              </p>

            </template>
          </Disclosure>
        </li>
        <li>
          <Disclosure>
            <template #summary>
              {{$t('wheretobuy.waystobuy.koroska.summary')}}
            </template>
            <template #details>
              <p>{{$t('wheretobuy.waystobuy.koroska.details[0]')}}</p>

              <p class="mt-2">
                <span class="font-bold">{{$t('wheretobuy.waystobuy.koroska.details[1]')}}</span>
                <I18nRouterLink class="inline" :colored="true" routeBasename="contact">{{$t('wheretobuy.waystobuy.koroska.details[2]')}}</I18nRouterLink>
                {{$t('wheretobuy.waystobuy.koroska.details[3]')}}
              </p>
            </template>
          </Disclosure>
        </li>
        <li>
          <Disclosure>
            <template #summary>
              {{$t('wheretobuy.waystobuy.ljubljana.summary')}}
            </template>
            <template #details>
              <p>{{$t('wheretobuy.waystobuy.ljubljana.details[0]')}}</p>

              <p class="mt-2">
                <span class="font-bold">{{$t('wheretobuy.waystobuy.ljubljana.details[1]')}}</span>
                <I18nRouterLink class="inline" :colored="true" routeBasename="contact">{{$t('wheretobuy.waystobuy.ljubljana.details[2]')}}</I18nRouterLink>
                {{$t('wheretobuy.waystobuy.ljubljana.details[3]')}}
              </p>
            </template>
          </Disclosure>
        </li>
      </ul>

      <div class="mt-5 max-w-xl">
        <p>
          <strong class="font-bold">{{$t('wheretobuy.waystobuy.largeOrders.summary')}}</strong>
          {{$t('wheretobuy.waystobuy.largeOrders.details')}}
        </p>
      </div>

    </div>
  </PageWrapper>

</template>
