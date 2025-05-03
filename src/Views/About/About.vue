<script setup>
import { inject } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import PriceList from '@/Shared/PriceList.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import Bio from '@/Shared/Bio.vue'
import ImagePanel from '@/Components/ImagePanel.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'

import travnikiFallImage from '@/assets/img/travniki-fall.jpg?w=700'
import applesCrateImage from '@/assets/img/apples-crate.jpg?w=700'
import appleBlossomsImage from '@/assets/img/apple-blossoms.jpg?w=600'
import jablaneImage from '@/assets/img/jablane.jpg?w=600'

</script>

<template>

  <PageWrapper>

    
    <h1 class="text-5xl font-['Latin_Modern_Roman'] mr-2">{{$t('about.h1')}}</h1>
    <p class="mt-10 max-w-2xl">{{$t('about.summary')}}</p>

    <div class="mt-10 md:mt-14 space-y-10 md:space-y-16">

      <!-- Story -->
      <ImagePanel
        :reverse="true"
        :imgFile="travnikiFallImage"
        :imgAlt="$t('imgAlts.travnikiFall')"
        :title="$t('story.h1')"
        routeBasename="story"
        :headingLink="true"
      >
        {{$t('story.ramsak')}}
      </ImagePanel>

      <!-- Apple varieties -->
      <ImagePanel
        :reverse="false"
        :imgFile="applesCrateImage"
        :imgAlt="$t('imgAlts.applesCrate')"
        :title="$t('apples.h1')"
        routeBasename="apples"
        :headingLink="true"
      >
        {{$t('apples.intro')}}
      </ImagePanel>

      <!-- Meadow orchard -->
      <ImagePanel
        :reverse="true"
        :imgFile="jablaneImage"
        :imgAlt="$t('imgAlts.jablane')"
        :title="$t('orchard.h1')"
        routeBasename="orchard"
        :headingLink="true"
      >
        <p>
          {{$t('orchard.intro[0]')}}
          <span class="italic">{{$t('orchard.intro[1]')}}</span> 
          {{$t('orchard.intro[2]')}}
          <span class="italic">{{$t('orchard.intro[3]')}}</span>
          <span class="">{{$t('orchard.intro[4]')}}</span>
        </p>
      </ImagePanel>




    </div>

  </PageWrapper>

</template>
