<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import TextInput from '@/Components/TextInput.vue'
import TextArea from '@/Components/TextArea.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'

const { t } = useI18n();

const name = ref('')
const email = ref('')
const message = ref('')
const emailRequiredMessage = ref()
const WEB3FORMS_ACCESS_KEY = "FOO"

async function submitForm() {
  emailRequiredMessage.value = ''
  if (!email.value) {
    emailRequiredMessage.value = t('contact.contactForm.emailRequiredMessage')
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
  <div>

    <form @submit.prevent="submitForm">

      <div class="mt-2 w-full max-w-xl">
        <InputLabel for="name" :value="$t('contact.contactForm.nameInput.label')" />
        <TextInput
        id="name"
        type="text"
        class="inline-block w-72"
        v-model="name"
        :placeholder="$t('contact.contactForm.nameInput.placeholder')"
      />
      </div>

      <div class="mt-4 w-full max-w-xl">
        <InputLabel for="email" :value="$t('contact.contactForm.emailInput.label')" />
        <TextInput
        id="email"
        type="email"
        class="inline-block w-72"
        :placeholder="$t('contact.contactForm.emailInput.placeholder')"
        v-model="email"
        required
      />
        <InputError class="max-w-xs" :message="emailRequiredMessage" />
      </div>

      <div class="mt-5 w-full max-w-xl">
        <InputLabel for="message" :value="$t('contact.contactForm.messageInput.label')" />
        <TextArea
        id="message"
        :placeholder="$t('contact.contactForm.messageInput.placeholder')"
        class="block w-full h-48 text-sm max-w-xl"
        v-model="message"
        required
      />
      </div>

      <PrimaryButton class="mt-5" type="submit">{{$t('contact.contactForm.submitButton')}}</PrimaryButton>
    </form>

  </div>
</template>
