<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import ApplePanel from './Partials/ApplePanel.vue'

import applesCrateImage from '@/assets/img/apples-crate.jpg?w=700'
import appleBlossomsImage from '@/assets/img/apple-blossoms.jpg?w=600'

</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">Sorte jabolk na kmetiji</h1>

    <!-- -mr moves image rightward -->
    <div class="mt-10 lg:flex space-x-16 lg:-mr-12">
      <div>
        <p>
          Sorte jablan na kmetiji vključujejo jonatan, carjevič, krivopecelj, ovčji nos, šampanjska reneta, kanadka, mošancelj, zlata parmena, grafenštajnc, londonski peping in seveda bobovec.
        </p>
      </div>

      <img 
      :src="applesCrateImage"
      :alt="$t('imgAlts.applesCrate')"
      class="hidden lg:block mx-auto !w-96 h-80 object-cover rounded-md"
    />

    </div>

    <!-- ApplePanel -->
    <ApplePanel 
      title="Jonatan"
      :appleImg="applesCrateImage"
      :appleImgAlt="$t('imgAlts.applesCrate')"
      :treeImg="appleBlossomsImage"
      :treeImgAlt="$t('imgAlts.appleBlossoms')"
      appleCaption="Jabolko"
      treeCaption="Jablana"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ApplePanel>

  </PageWrapper>

</template>
