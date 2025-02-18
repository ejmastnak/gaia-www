<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Disclosure from '@/Components/Disclosure.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import orehTreeImage from '@/assets/img/oreh-tree.jpg?w=600'
</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('buy.h1')}}</h1>

    <!-- -mr moves image rightward -->
    <div class="mt-10 lg:flex space-x-16 lg:-mr-12">
      <div>
        <p>{{$t('buy.eshop')}}</p>
        <div class="mt-5">
          <PrimaryLink class="inline-flex items-center gap-x-1.5" :asAnchor="true" href="https://shop.gaia.si">
            <span>{{$t('buy.eshopLink')}}</span>
            <ArrowTopRightOnSquareIcon class="size-5 text-white shrink-0" />
          </PrimaryLink>
        </div>

        <p class="mt-5">
          {{$t('buy.contactUsInstead[0]')}}
          <I18nRouterLink class="inline text-blue-600" routeBasename="contact">{{$t('buy.contactUsInstead[1]')}}</I18nRouterLink>
          <span>{{$t('buy.contactUsInstead[2]')}}</span>
        </p>

        <div class="mt-5 max-w-xl">
          <p>
            <span class="font-bold">{{$t('buy.delivery[0]')}}</span>
            {{$t('buy.delivery[1]')}}
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
