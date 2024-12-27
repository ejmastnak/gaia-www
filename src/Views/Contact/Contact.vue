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

    <p class="mt-8 max-w-xl">
      {{$t('contact.subheading')}}
    </p>

    <ul class="mt-3 space-y-2">
      <li>
        <Disclosure summary="By phone or WhatsApp" >
          {{$t('contact.waysToContact.phone.details.callMeAt')}}
          <a class="hover:text-blue-600" href="tel:+38631230167">{{$t('contact.waysToContact.phone.details.phone')}}</a>
          {{$t('contact.waysToContact.phone.details.name')}}
        </Disclosure>
      </li>
      <li>
        <Disclosure summary="By email" >
          {{$t('contact.waysToContact.email.details.writeUsAt')}}
           <a class="hover:text-blue-600" href="mailto:info@gaia.si">{{$t('contact.waysToContact.email.details.email')}}</a>
        </Disclosure>
      </li>

    </ul>

    <div class="mt-5">

      <h2 class="text-3xl font-['Latin_Modern_Roman']" id="contact-directly">Contact form</h2>

      <p class="mt-3">You can also contact us using the form below:</p>

      <ContactForm class="mt-5" />
      
    </div>

  </PageWrapper>

</template>
