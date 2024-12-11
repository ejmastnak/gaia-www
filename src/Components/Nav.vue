<script setup>
import Translate from "@/i18n/translation"
import LanguageSwitcher from '@/Components/LanguageSwitcher.vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
</script>

<template>
  <nav>
    <ul>
      <li>
        <I18nRouterLink routeBasename="home">
          {{ $t("nav.home") }}
        </I18nRouterLink>
      </li>

      <li>
        <I18nRouterLink routeBasename="about">
          {{ $t("nav.about") }}
        </I18nRouterLink>
      </li>
    </ul>

    <LanguageSwitcher />

  </nav>
</template>
