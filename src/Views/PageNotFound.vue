<script setup>
import PageWrapper from '@/Shared/PageWrapper.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl sm:text-8xl font-['Latin_Modern_Roman']">{{$t("pageNotFound.h1")}}</h1>

    <div class="ml-1 mt-5">
      <p class="text-xl">{{$t("pageNotFound.p")}}</p>

      <I18nRouterLink
        class="inline-flex mt-4 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-900 p-px rounded-md hover:underline focus-visible:outline-gray-900"
        routeBasename="home"
      >
        {{$t("pageNotFound.link")}}
      </I18nRouterLink>

    </div>

  </PageWrapper>

</template>
