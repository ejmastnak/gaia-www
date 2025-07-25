<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import ApplePanel from './Partials/ApplePanel.vue'

import applesCrateImage from '@/assets/img/apples-crate.jpg?w=700'
import appleBlossomsImage from '@/assets/img/apple-blossoms.jpg?w=600'
import bobovecImage from '@/assets/img/apple-trees/bobovec.jpg?w=700'
import boskopImage from '@/assets/img/apple-trees/boskop.jpg?w=700'
import carjevicImage from '@/assets/img/apple-trees/carjevic.jpg?w=700'
import grafenstajncImage from '@/assets/img/apple-trees/grafenstajnc.jpg?w=700'
import jonatanImage from '@/assets/img/apple-trees/jonatan.jpg?w=700'
import kanadkaImage from '@/assets/img/apple-trees/kanadka.jpg?w=700'
import krivopeceljImage from '@/assets/img/apple-trees/krivopecelj.jpg?w=700'
import londonskiPepingImage from '@/assets/img/apple-trees/londonski-peping.jpg?w=700'
import mosanceljImage from '@/assets/img/apple-trees/mosancelj.jpg?w=700'
import sampanjskaRenetaImage from '@/assets/img/apple-trees/sampanjska-reneta.jpg?w=700'
import zlataParmenaImage from '@/assets/img/apple-trees/zlata-parmena.jpg?w=700'

</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('apples.h1')}}</h1>

    <!-- Breadcrumb -->
    <p class="ml-px mt-1.5 text-base text-gray-600">
      <I18nRouterLink routeBasename="about">{{$t('about.h1')}}</I18nRouterLink>
      <span> > </span>
      <I18nRouterLink routeBasename="apples">{{$t('apples.h1')}}</I18nRouterLink>
    </p>


    <!-- -mr moves image rightward -->
    <div class="mt-10 lg:flex space-x-16 lg:-mr-12">

      <div class="flex flex-col gapy-y-3 max-w-2xl">
        <p>{{$t('apples.intro')}}</p>

        <!-- Disclaimer -->
        <p class="mt-3 text-base text-gray-700">
          <span class="font-bold">{{$t('apples.imageDisclaimer.heading')}}</span>
          {{$t('apples.imageDisclaimer.message')}}
        </p>
      </div>

      <img 
      :src="applesCrateImage"
      :alt="$t('imgAlts.applesCrate')"
      class="hidden lg:block mx-auto !w-96 h-80 object-cover rounded-md"
    />


    </div>




    <ul class="mt-8 space-y-8 sm:space-y-10">

      <!-- Bobovec -->
      <li>
        <ApplePanel 
          :title="$t('apples.bobovec.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="bobovecImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.bobovec.fruitCaption')"
          :treeCaption="$t('apples.bobovec.treeCaption')"
        >
          {{$t('apples.bobovec.description')}}
        </ApplePanel>
      </li>

      <!-- Boskopski Kosmac -->
      <li>
        <ApplePanel 
          :title="$t('apples.boskopskiKosmac.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="boskopImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.boskopskiKosmac.fruitCaption')"
          :treeCaption="$t('apples.boskopskiKosmac.treeCaption')"
        >
          {{$t('apples.boskopskiKosmac.description')}}
        </ApplePanel>
      </li>

      <!-- Carjevič -->
      <li>
        <ApplePanel 
          :title="$t('apples.carjevic.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="carjevicImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.carjevic.fruitCaption')"
          :treeCaption="$t('apples.carjevic.treeCaption')"
        >
          {{$t('apples.carjevic.description')}}
        </ApplePanel>
      </li>

      <!-- Grafenštajnc -->
      <li>
        <ApplePanel 
          :title="$t('apples.grafenstajnc.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="grafenstajncImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.grafenstajnc.fruitCaption')"
          :treeCaption="$t('apples.grafenstajnc.treeCaption')"
        >
          {{$t('apples.grafenstajnc.description')}}
        </ApplePanel>
      </li>

      <!-- Jonatan -->
      <li>
        <ApplePanel 
          :title="$t('apples.jonatan.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="jonatanImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.jonatan.fruitCaption')"
          :treeCaption="$t('apples.jonatan.treeCaption')"
        >
          {{$t('apples.jonatan.description')}}
        </ApplePanel>
      </li>

      <!-- Kanadka -->
      <li>
        <ApplePanel 
          :title="$t('apples.kanadka.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="kanadkaImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.kanadka.fruitCaption')"
          :treeCaption="$t('apples.kanadka.treeCaption')"
        >
          {{$t('apples.kanadka.description')}}
        </ApplePanel>
      </li>

      <!-- Krivopecelj -->
      <li>
        <ApplePanel 
          :title="$t('apples.krivopecelj.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="krivopeceljImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.krivopecelj.fruitCaption')"
          :treeCaption="$t('apples.krivopecelj.treeCaption')"
        >
          {{$t('apples.krivopecelj.description')}}
        </ApplePanel>
      </li>

      <!-- Londonski peping -->
      <li>
        <ApplePanel 
          :title="$t('apples.londonskiPeping.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="londonskiPepingImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.londonskiPeping.fruitCaption')"
          :treeCaption="$t('apples.londonskiPeping.treeCaption')"
        >
          {{$t('apples.londonskiPeping.description')}}
        </ApplePanel>
      </li>

      <!-- Mošancelj -->
      <li>
        <ApplePanel 
          :title="$t('apples.mošancelj.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="mosanceljImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.mošancelj.fruitCaption')"
          :treeCaption="$t('apples.mošancelj.treeCaption')"
        >
          {{$t('apples.mošancelj.description')}}
        </ApplePanel>
      </li>

      <!-- Šampanjska reneta -->
      <li>
        <ApplePanel 
          :title="$t('apples.sampanjskaReneta.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="sampanjskaRenetaImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.sampanjskaReneta.fruitCaption')"
          :treeCaption="$t('apples.sampanjskaReneta.treeCaption')"
        >
          {{$t('apples.sampanjskaReneta.description')}}
        </ApplePanel>
      </li>

      <!-- Zlata parmena -->
      <li>
        <ApplePanel 
          :title="$t('apples.zlataParmena.name')"
          :appleImg="applesCrateImage"
          :appleImgAlt="$t('imgAlts.applesCrate')"
          :treeImg="zlataParmenaImage"
          :treeImgAlt="$t('imgAlts.appleBlossoms')"
          :fruitCaption="$t('apples.zlataParmena.fruitCaption')"
          :treeCaption="$t('apples.zlataParmena.treeCaption')"
        >
          {{$t('apples.zlataParmena.description')}}
        </ApplePanel>
      </li>

    </ul>

  </PageWrapper>

</template>
