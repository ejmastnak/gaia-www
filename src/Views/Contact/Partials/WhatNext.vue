<template>
  <div class="mt-6 max-w-2xl">
    <Disclosure v-slot="{ open }">
      <DisclosureButton class="px-5 py-3 text-blue-900 bg-blue-50 hover:bg-blue-100 flex items-end w-full rounded-lg shadow-sm">
        <p>What happens after I send the form?</p>
        <ChevronDownIcon  class="ml-auto block w-6 h-6 text-gray-600 shrink-0"  :class="open && 'rotate-180 transform'" />
      </DisclosureButton>
      <DisclosurePanel class="mt-1 mx-1.5">
        <p>
          Randall, the owner of Artisanal Restoration, will receive your message by email.
          Within a few days, he will respond to you by email or phone to answer any questions, discuss your project, and schedule an on-site consultation.
          Randall then visits your home, listens to your opinions and preferences, offers his own input and expertise, and together you agree on a plan of action.
        </p>

        <p class="mt-2">
          On small projects Randall may even perform the work the same day. On larger projects, you agree on a work schedule, budget, and estimated completion time.
          Randall then begins work, communicating with you on a case-by-case basis as the project evolves to inform you about progress and, as needed, changes or improvements to the original plan.
        </p>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>
