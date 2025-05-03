<script setup>
import SecondaryLink from '@/Components/SecondaryLink.vue'
</script>

<template>
  <div class="p-2 px-3 text-base border border-green-700 bg-green-50 rounded">
    <p class="font-bold text-green-800">{{$t('shared.bio.heading')}}</p>
    <p>{{$t('shared.bio.text')}}</p>
    <SecondaryLink class="mt-2 !px-2.5 !py-1.5" routeBasename="bio">
      {{$t("partials.readMore")}}
      <span aria-hidden="true"> &rarr;</span>
    </SecondaryLink>

  </div>
</template>
