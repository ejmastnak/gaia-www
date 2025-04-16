<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import Disclosure from '@/Components/Disclosure.vue'
import ContactForm from './Partials/ContactForm.vue'
import appleBlossomsImage from '@/assets/img/apple-blossoms-2.jpg?w=600'
</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('contact.h1')}}</h1>

    <!-- -mr moves image rightward -->
    <div class="mt-10 lg:flex space-x-16 lg:-mr-12">
      <div>
        <p class="max-w-2xl">
          {{$t('contact.subheading')}}
        </p>

        <p v-if="$t('contact.waysToContactUs')" class="mt-5">
          {{$t('contact.waysToContactUs')}}
        </p>

        <ul class="mt-3 space-y-2">
          <li>
            <Disclosure>
              <template #summary>
                <span>{{$t('contact.waysToContact.phone.summary')}}</span>
              </template>
              <template #details>
                {{$t('contact.waysToContact.phone.details[0]')}}
                <a class="inline font-bold hover:text-blue-600" href="tel:+38631230167">{{$t('contact.waysToContact.phone.details[1]')}}</a>
              </template>
            </Disclosure>
          </li>
          <li>
            <Disclosure>
              <template #summary>
                <span>{{$t('contact.waysToContact.email.summary')}}</span>
              </template>
              <template #details>
                {{$t('contact.waysToContact.email.details[0]')}}
                <a class="font-bold hover:text-blue-600" href="mailto:info@gaia.si">{{$t('contact.waysToContact.email.details[1]')}}</a>
              </template>
            </Disclosure>
          </li>
          <li>
            <Disclosure>
              <template #summary>
                <span>{{$t('contact.waysToContact.whatsapp.summary')}}</span>
              </template>
              <template #details>
                {{$t('contact.waysToContact.whatsapp.details[0]')}}
                <a class="inline font-bold hover:text-blue-600" href="tel:+38631230167">{{$t('contact.waysToContact.whatsapp.details[1]')}}</a>
              </template>
            </Disclosure>
          </li>
          <li class="hidden">
            <Disclosure>
              <template #summary>
                <span>{{$t('contact.waysToContact.contactForm.summary')}}</span>
              </template>
              <template #details>
                <p>{{$t('contact.waysToContact.contactForm.details')}}</p>
                <ContactForm class="mt-4" />
              </template>
            </Disclosure>
          </li>

        </ul>

        <p class="mt-5 max-w-2xl">
          {{$t('contact.youWillProbablyReachElijan')}}
        </p>
      </div>

      <img 
      :src="appleBlossomsImage"
      :alt="$t('imgAlts.appleBlossoms')"
      class="hidden lg:block mx-auto w-96 h-80 object-cover rounded-md"
    />

    </div>

  </PageWrapper>

</template>
