<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
</script>

<template>
  <div class="p-2 px-3 text-base border border-green-700 bg-green-50 rounded">
    <p class="font-bold text-green-800">{{$t('shared.bio.heading')}}</p>
    <p>
      {{$t('shared.bio.text')}}
      <I18nRouterLink routeBasename="bio" class="text-green-700 hover:text-blue-700 font-bold hover:underline">{{$t('shared.bio.link')}}</I18nRouterLink>
    </p>
  </div>
</template>
