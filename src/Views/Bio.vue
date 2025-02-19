<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import appleBlossomsImage from '@/assets/img/apple-blossoms.jpg?w=600'
</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('bio.h1')}}</h1>

    <!-- -mr moves image rightward -->
    <div class="mt-10 lg:flex space-x-16 lg:-mr-12">
      <div>
        Our products are bio!
        Our farm has a history of bio farming!
        We have old certificates!
        During purchase we failed to renew certificates!
        But we haven't changed anything! Our products are still bio!
      </div>

      <img 
      :src="appleBlossomsImage"
      :alt="$t('imgAlts.appleBlossoms')"
      class="hidden lg:block mx-auto !w-96 h-80 object-cover rounded-md"
    />

    </div>

  </PageWrapper>

</template>
