<script setup>
  import LearnMoreButton from '@/Components/LearnMoreButton.vue'
</script>

<template>

  <div>
    <!-- Title -->
    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">{{$t("home.partialTitles.about")}}</h2>
    <div class="md:flex mt-6 md:mt-12 px-6  text-gray-700">
      <!-- Image -->
      <img 
      src="@/assets/img/flowers.jpg"
      alt="Flowers"
      class="w-full h-56 mx-auto md:w-96 md:h-96 object-cover rounded-md"
    />
      <div class="md:px-8 py-4 md:py-6 lg:ml-12 text-lg lg:text-xl">
        <p>
          {{$t("about.summary")}}
        </p>
        <LearnMoreButton class="mt-4 md:mt-8 mx-auto" routeBasename="about" />
      </div>
    </div>
  </div>

</template>
