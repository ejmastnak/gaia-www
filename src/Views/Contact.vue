<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import TextInput from '@/Components/TextInput.vue'
import TextArea from '@/Components/TextArea.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import { ChevronDownIcon, } from '@heroicons/vue/24/outline'
import PageWrapper from '@/Shared/PageWrapper.vue'
import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const emailOrPhoneRequiredMessage = ref('')
const WEB3FORMS_ACCESS_KEY = "FOO"

async function submitForm() {
  emailOrPhoneRequiredMessage.value = ''
  if (!email.value && !phone.value) {
    emailOrPhoneRequiredMessage.value = "Input either an email or phone number (your choice); without either, we have no way to respond to you."
    return
  }

  return

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
}

</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">Contact</h1>

    <p class="mt-8 text-gray-700 max-w-2xl">
      Schedule a consultation or ask questions using the contact form below.
      We need either your email or phone so we can respond to you; leave whichever you prefer.
    </p>

    <p class="mt-2 text-lg text-gray-700 max-w-xl">
      You can also contact us directly by phone or email—<a href="#contact-directly" class="text-blue-500 hover:underline hover:text-blue-500">see below</a>.
    </p>

    <div class="mt-6">

      <form @submit.prevent="submitForm">

        <div class="mt-2 w-full max-w-xl">
          <InputLabel for="name" value="Name" />
          <TextInput
          id="name"
          type="text"
          class="inline-block w-72"
          v-model="name"
          placeholder="Your name"
          required
        />
        </div>

        <div class="mt-4 w-full max-w-xl">
          <InputLabel for="email" value="Email" />
          <TextInput
          id="email"
          type="email"
          class="inline-block w-72"
          placeholder="Your email"
          v-model="email"
        />
          <InputError class="max-w-xs" :message="emailOrPhoneRequiredMessage" />
        </div>

        <div class="mt-4 w-full max-w-xl">
          <InputLabel for="phone">
            <p>Phone number</p>
            <p class="text-sm -mt-px text-gray-500 !font-normal">Format: (123) 456-7890</p>
          </InputLabel>
          <TextInput
          id="phone"
          type="tel"
          pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
          placeholder="(123) 456-7890"
          class="inline-block w-72"
          v-model="phone"
        />
          <InputError class="max-w-xs" :message="emailOrPhoneRequiredMessage" />
        </div>


        <div class="mt-5 w-full max-w-xl">
          <InputLabel for="message" value="Message" />
          <TextArea
          id="message"
          placeholder="Your message"
          class="block w-full h-48 text-sm max-w-xl"
          v-model="message"
          required
        />
        </div>

        <PrimaryButton class="mt-5" type="submit">Send Message</PrimaryButton>
      </form>

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

    </div>

    <div class="mt-10">
      <h2 class="text-3xl font-['Latin_Modern_Roman']" id="contact-directly">Contact us directly</h2>

      <p class="mt-4"> You can also contact Randall Basti of Artisanal Restoration directly:</p>

      <ul class="mt-4 ml-5 list-disc">
        <li>By phone at <a class="hover:text-blue-600" href="tel:+19087872526">(908) 787 2526</a> </li>
        <li>By email at <a class="hover:text-blue-600" href="mailto:rbasti@comcast.net">rbasti@comcast.net</a></li>
      </ul>
    </div>

  </PageWrapper>

</template>
