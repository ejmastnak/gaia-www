<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'

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
      :src="appleBlossomsImage"
      :alt="$t('imgAlts.appleBlossoms')"
      class="hidden lg:block mx-auto !w-96 h-80 object-cover rounded-md"
    />

    </div>

  </PageWrapper>

</template>
