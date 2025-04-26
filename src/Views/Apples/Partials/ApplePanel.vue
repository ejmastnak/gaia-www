<script setup>
const props = defineProps({
  title: String,
  appleImg: String,
  appleImgAlt: String,
  fruitCaption: String,
  treeImg: String,
  treeImgAlt: String,
  treeCaption: String,
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold">{{title}}</h2>

    <p class="mt-2 max-w-3xl">
      <slot />
    </p>

    <div class="mt-8 flex flex-col sm:flex-row sm:justify-start items-center sm:items-start gap-5">

      <figure>
        <img 
        :src="appleImg"
        :alt="appleImgAlt"
        class="block mx-auto w-96 object-cover rounded-md"
      />
        <figcaption>{{fruitCaption}}</figcaption>
      </figure>

      <figure>
        <img 
        :src="treeImg"
        :alt="treeImgAlt"
        class="block mx-auto !w-96 object-cover rounded-md"
      />
        <figcaption>{{treeCaption}}</figcaption>
      </figure>

    </div>

  </div> 
</template>
