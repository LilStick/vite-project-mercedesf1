<script setup>
import { useCartStore } from "../stores/cart";
import ProductList from "../components/Product/ProductList.vue";

const cartStore = useCartStore();
</script>

<template>
  <h1>Nos produits</h1>
  <ProductList
    :products="cartStore.products"
    @add-to-cart="cartStore.addToCart" />
</template>
<!-- src/views/ProductsView.vue -->
<style scoped>
.products-view {
  padding: 2rem 0;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

h1 {
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-color);
}
</style>
