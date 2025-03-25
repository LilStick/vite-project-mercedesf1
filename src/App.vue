<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "./stores/auth";
import { useCartStore } from "./stores/cart";
import NavBar from "./components/NavBar.vue";

const authStore = useAuthStore();
const cartStore = useCartStore();

onMounted(() => {
  authStore.initialize();
  cartStore.initialize();
});
</script>

<template>
  <NavBar />
  <router-view />
</template>
