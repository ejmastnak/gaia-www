<script setup>
import { ref, onMounted } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, } from '@headlessui/vue'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from "vue-router"
import Translate from "@/i18n/translation"

const { t, locale } = useI18n()
const router = useRouter()
const currentRoute = useRoute()
const supportedLocales = Translate.supportedLocales

const switchLanguageTo = async (newLocale) => {
  if (newLocale === locale.value) return;

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
  <div class="">
    <Listbox 
      :modelValue="locale"
      @update:modelValue="switchLanguageTo"
    >
      <ListboxButton class="flex items-center text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-2 py-2">
        <GlobeAltIcon class="w-6 h-6 translate-y-px text-gray-500 shrink-0" />
        <span class="ml-1 uppercase text-lg font-bold">{{ locale }}</span>
        <ChevronDownIcon class="translate-y-px ml-0.5 w-5 h-5 text-gray-500 shrink-0" />
      </ListboxButton>
      <ListboxOptions class="absolute right-0 mt-0.5 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        <ListboxOption
          v-for="option in supportedLocales"
          :key="`locale-${option}`"
          :value="option"
          class="text-left cursor-pointer"
          v-slot="{ active, selected }"
        >
          <li class="flex items-center px-4 py-1.5" :class="{
            'bg-blue-500 text-white': active,
            'text-gray-500': !selected && !active,
            'font-bold': selected,
          }"
          >
            {{ t(`locales.${option}`) }}
          </li>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
