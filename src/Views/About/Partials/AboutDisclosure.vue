<script setup>
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const props = defineProps({
  summary: String,
})
</script>
<template>

  <div class="hover:shadow -mx-2 px-2 py-1 rounded-lg">
    <Disclosure v-slot="{ open }">

      <DisclosureButton class="text-left">
        <p>{{summary}}<span v-if="!open">..</span></p>
      </DisclosureButton>

      <DisclosurePanel class="mt-2">
        <DisclosureButton class="text-left">
          <slot name="details"/>
        </DisclosureButton>
      </DisclosurePanel>

      <!-- More... button -->
      <DisclosureButton class="hover:underline mt-1 text-left font-bold text-blue-700">
        <div class="flex items-center">
          <span>{{open ? $t('about.aboutDisclosure.less') : $t('about.aboutDisclosure.more')}}</span>
          <ChevronDownIcon  class="translate-y-0.5 ml-1 w-4 h-4 text-blue-900 shrink-0"  :class="open && 'rotate-180 transform'" />
        </div>
      </DisclosureButton>

    </Disclosure>
  </div>

</template>
