<script setup>
import ProductCard from "./ProductCard.vue";

defineProps({
  products: Array,
});

const emit = defineEmits(["add-to-cart"]);
</script>

<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="emit('add-to-cart', product.id)" />
  </div>
</template>
