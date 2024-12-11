<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from "vue-router"
import Translate from "@/i18n/translation"

const { t, locale } = useI18n()
const router = useRouter()
const currentRoute = useRoute()
const supportedLocales = Translate.supportedLocales

const switchLanguage = async (event) => {
  const newLocale = event.target.value

  await Translate.switchLanguage(newLocale)

  try {
    // Split current route (e.g. 'home.en') into basename and locale
    const routePattern = /^([\w]+)\.([\w]{2})$/
    let match
    if ((match = currentRoute.name.match(routePattern))) {
      const basename = match[1]
      await router.replace({name: basename + '.' + newLocale})
    } else {
      console.log("Error parsing basename from current route:");
      console.log(currentRoute)
      router.push({name: 'home'})
    }
  } catch(e) {
    console.log("Error replacing route locale.");
    console.log(e)
    router.push({name: 'home'})
  }
}

</script>

<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locales.${sLocale}`) }}
    </option>
  </select>
</template>
