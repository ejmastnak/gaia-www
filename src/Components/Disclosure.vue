<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="flex items-center w-full max-w-sm rounded-lg px-4 py-2 hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/75"
    >
      <ChevronRightIcon
      :class="open ? 'rotate-90 transform' : ''"
      class="h-5 w-5 text-orange-900"
    />
      <slot name="summary"></slot>
    </DisclosureButton>
    <DisclosurePanel class="px-5 pb-2 pt-2 text-base text-gray-800 max-w-xl rounded-lg">
      <slot name="details"></slot>
    </DisclosurePanel>
  </Disclosure>
</template>
