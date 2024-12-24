<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Disclosure from '@/Components/Disclosure.vue'
</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('wheretobuy.h1')}}</h1>

    <div class="mt-8">
      {{$t('wheretobuy.intro')}}
      <ul class="mt-3 space-y-2">
        <li>
          <Disclosure :summary="$t('wheretobuy.waystobuy.farm.summary')" >
            {{$t('wheretobuy.waystobuy.farm.details')}}
          </Disclosure>
        </li>
        <li>
          <Disclosure :summary="$t('wheretobuy.waystobuy.ljubljana.summary')" >
            {{$t('wheretobuy.waystobuy.ljubljana.details')}}
          </Disclosure>
        </li>
      </ul>

      <div class="mt-5 max-w-xl">
        <p>
          <strong class="font-bold">{{$t('wheretobuy.waystobuy.largeOrders.summary')}}</strong> {{$t('wheretobuy.waystobuy.largeOrders.details')}}
        </p>
      </div>

    </div>
  </PageWrapper>

</template>
