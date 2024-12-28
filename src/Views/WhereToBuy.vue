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
            <!-- {{$t('wheretobuy.waystobuy.farm.details')}} -->
            <p>
              <span class="font-bold">How it works:</span> <I18nRouterLink class="inline" :colored="true" routeBasename="contact">Contact us by email, phone, or contact form</I18nRouterLink> to arrange a pick-up time, then visit us at Tolsti vrh pri Mislinji 47, Tolsti vrh pri Mislinji, 2382 Milsinja.
            </p>

            <p class="mt-1">
              We'll be happy to show you around, offer samples of our products to try, and discount prices.
            </p>

          </Disclosure>
        </li>
        <li>
          <Disclosure :summary="$t('wheretobuy.waystobuy.koroska.summary')" >
            <!-- {{$t('wheretobuy.waystobuy.ljubljana.details')}} -->
            <p>We are happy to deliver to Mislinja, Velenje, Slovenj Gradec and the surrounding areas.</p>

            <p class="mt-2">
              <span class="font-bold">How it works:</span> <I18nRouterLink class="inline" :colored="true" routeBasename="contact">Contact us by email, phone, or contact form</I18nRouterLink> and tell us your location, availability, and the products you'd like to order.
              We'll respond and arrange a suitable pick-up time.
            </p>
          </Disclosure>
        </li>
        <li>
          <Disclosure :summary="$t('wheretobuy.waystobuy.ljubljana.summary')" >
            <!-- {{$t('wheretobuy.waystobuy.ljubljana.details')}} -->
            <p>Elijan—the son of the father-son team running the farm—works part-time in Ljubljana and can arrange delivery to Ljubljana on weekends (and possibly other days upon prior arrangement).</p>

            <p class="mt-2">
              <span class="font-bold">How it works:</span> <I18nRouterLink class="inline" :colored="true" routeBasename="contact">Contact us by email, phone, or contact form</I18nRouterLink> and tell us your availability and the products you'd like to order.
              We'll respond and arrange a suitable pick-up time and location.
            </p>
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
