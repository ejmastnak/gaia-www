<script setup>
import { ref } from 'vue'
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
import Disclosure from '@/Components/Disclosure.vue'
import ContactForm from './Partials/ContactForm.vue'
</script>

<template>

  <PageWrapper>
    <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t('contact.h1')}}</h1>

    <p class="mt-5 max-w-2xl">
      <!-- {{$t('contact.subheading')}} -->
      Contact us to order products, arrange delivery, visit our farm, or ask questions.
    </p>

    <h2 class="mt-5 text-2xl font-['Latin_Modern_Roman']">Ways to contact us</h2>

    <ul class="mt-3 space-y-2">
      <li>
        <Disclosure>
          <template #summary>
            By phone or WhatsApp
          </template>
          <template #details>
            {{$t('contact.waysToContact.phone.details.callMeAt')}}
            <a class="hover:text-blue-600" href="tel:+38631230167">{{$t('contact.waysToContact.phone.details.phone')}}</a>
            {{$t('contact.waysToContact.phone.details.name')}}
          </template>
        </Disclosure>
      </li>
      <li>
        <Disclosure>
          <template #summary>
            By email
          </template>
          <template #details>
            {{$t('contact.waysToContact.email.details.writeUsAt')}}
            <a class="hover:text-blue-600" href="mailto:info@gaia.si">{{$t('contact.waysToContact.email.details.email')}}</a>
          </template>
        </Disclosure>
      </li>
      <li>
        <Disclosure>
          <template #summary>
            By contact form
          </template>
          <template #details>
            Send a message using the contact form:
            <ContactForm class="mt-4" />
          </template>
        </Disclosure>
      </li>

    </ul>

    <div class="hidden mt-5">
      <h2 class="text-3xl font-['Latin_Modern_Roman']" id="contact-directly">Contact form</h2>
      <p class="mt-3">You can also contact us using the form below:</p>
      <ContactForm class="mt-5" />
    </div>

    <p class="mt-5 max-w-2xl">
      In each case you will most likely reach Elijan (the son of the father-son team), who will happily step into contact with you to answer questions or arrange logistics.
    </p>

  </PageWrapper>

</template>
