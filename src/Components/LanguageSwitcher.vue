<script setup>
import { ref, onMounted } from 'vue'
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption, } from '@headlessui/vue'
import { ChevronDownIcon, GlobeAltIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from "vue-router"
import Translate from "@/i18n/translation"

const { t, locale } = useI18n()
const router = useRouter()
const currentRoute = useRoute()
const supportedLocales = Translate.supportedLocales
const supportedLocaleNames = Translate.supportedLocaleNames

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
  <div class="relative w-fit">
    <Listbox as="div" :modelValue="locale" @update:modelValue="switchLanguageTo">
      <ListboxLabel class="sr-only">Change language</ListboxLabel>
      <div class="relative">
        <ListboxButton class="inline-flex divide-x divide-orange-600 rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-orange-600">
          <div class="inline-flex items-center gap-x-1.5 rounded-l-md bg-orange-600 px-3 py-2 text-white">
            <GlobeAltIcon class="-ml-0.5 size-5" aria-hidden="true" />
            <p class="text-sm font-semibold">{{locale}}</p>
          </div>
          <div class="inline-flex items-center rounded-l-none rounded-r-md bg-orange-600 p-2 outline-none hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400">
            <span class="sr-only">Change language</span>
            <ChevronDownIcon class="size-5 text-white forced-colors:text-[Highlight]" aria-hidden="true" />
          </div>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <ListboxOption as="template" v-for="(option, idx) in supportedLocales" :key="`locale-${option}`" :value="option" v-slot="{ active, selected }">
              <li :class="[active ? 'bg-orange-600 text-white' : 'text-gray-900', 'cursor-default select-none p-4 text-base']">
                <div class="flex flex-col">
                  <div class="flex justify-between">
                    <p :class="selected ? 'font-semibold' : 'font-normal'">{{ supportedLocaleNames[idx] }}</p>
                    <span v-if="selected" :class="active ? 'text-white' : 'text-orange-600'">
                      <CheckIcon class="size-5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
