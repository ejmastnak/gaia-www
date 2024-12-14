<script setup>
import I18nRouterLink from '@/Components/I18nRouterLink.vue'
import PageWrapper from '@/Shared/PageWrapper.vue'
</script>

<template>

  <PageWrapper>

    <div>
      <h1 class="text-5xl font-['Latin_Modern_Roman']">{{$t("about.h1")}}</h1>

      <div class="mt-10 max-w-2xl">

        <p>
          Artisanal Restoration is the one-man company of master carpenter and cabinetmaker Randall Basti.
        </p>

        <p class="mt-5">
          Randall has been woodworking since high school and carries over three decades of professional experience in carpentry and adjacent trades.
          After an N-year detour working as X for Bank of America in the 20N0s, where he gained valuable experience in management, administration, and business operations, he opened Artisanal Restoration and has spent N successful years serving historic homes in the Central New Jersey area.
        </p>
      </div>
    </div>

    <!-- Mobile image -->
    <div class="sm:hidden mt-6">
      <img 
      src="@/assets/img/flowers.jpg"
      alt="Detail image of a custom profile carved into a staircase handrail"
      class="h-60 w-full max-w-md mx-auto object-cover rounded-md"
    />
    </div>

    <!-- Services -->
    <div class="mt-8 sm:mt-10 ">
      <h2 class="text-4xl font-['Latin_Modern_Roman']">Services</h2>
      <div class="sm:flex flex-row-reverse">

        <!-- Service image -->
        <div class="hidden sm:block w-72 md:w-96 shrink-0 grid place-items-start sm:ml-5">
          <img 
          src="@/assets/img/flowers.jpg"
          alt="Detail image of a custom profile carved into a staircase handrail"
          class="mx-auto object-cover rounded-md"
        />
        </div>

        <!-- List of services -->
        <div class="mt-4 leading-relaxed sm:mr-auto">

          <p class="mt-4 max-w-2xl sm:max-w-lg">
            We specialize in the renovation and restoration of historic homes, restoration of antique furniture, and in custom-built furniture and cabinetry,
            but offer many other carpentry and home improvement services.
            For a full list of services, see <I18nRouterLink routeBasename="products" class="text-blue-500 hover:underline hover:text-blue-600">our Services page.</I18nRouterLink>
          </p>

          <!-- Desktop contact button -->
          <I18nRouterLink routeBasename="products" class="hidden md:block w-fit block mt-8 mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 ">
            Full list of services
          </I18nRouterLink>

        </div>

      </div>

      <!-- Mobile link to more services -->
      <I18nRouterLink routeBasename="products" class="md:hidden w-fit block mt-6 sm:mt-8 mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 ">
        Full list of services
      </I18nRouterLink>

    </div>

  </PageWrapper>

</template>
