<script setup>
  import ProductPanel from './ProductPanel.vue'
</script>

<template>

  <div>

    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">{{$t('home.partialTitles.products')}}</h2>

    <ProductPanel
      class="mt-8 md:mt-16"
      :reverse="true"
      :imgFile="null"
      :imgAlt="null"
      :title="$t('products.jabsok.name')"
      routeBasename="products"
    >
      {{$t("products.jabsok.summary")}}
    </ProductPanel>

    <ProductPanel
      class="mt-8 md:mt-16"
      :reverse="false"
      :imgFile="null"
      imgAlt="null"
      :title="$t('products.jabkis.name')"
      routeBasename="products"
    >
      {{$t("products.jabkis.summary")}}
    </ProductPanel>


    <ProductPanel
      class="mt-5 md:mt-16"
      :reverse="true"
      :imgFile="null"
      imgAlt="null"
      :title="$t('products.sntolj.name')"
      routeBasename="products"
    >
      {{$t("products.sntolj.summary")}}
    </ProductPanel>

  </div>

</template>
