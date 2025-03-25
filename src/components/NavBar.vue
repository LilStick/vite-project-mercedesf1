<script setup>
import { useAuthStore } from "../stores/auth";
import { useCartStore } from "../stores/cart";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const authStore = useAuthStore();
const cartStore = useCartStore();

const cartItemCount = computed(() => cartStore.count);
</script>

<template>
  <nav>
    <img src="../assets/vue.svg" alt="Logo" />
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink v-if="authStore.isAuthenticated" to="/products"
      >Produits</RouterLink
    >

    <div v-if="!authStore.isAuthenticated">
      <RouterLink to="/auth">Connexion</RouterLink>
    </div>

    <div v-else>
      <RouterLink to="/cart">Panier ({{ cartItemCount }})</RouterLink>
      <button @click="authStore.logout">Déconnexion</button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav a {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-weight: 500;
}

nav a:hover {
  color: var(--primary);
}

nav a.router-link-active {
  color: var(--primary);
  font-weight: 600;
}

.nav-right {
  margin-left: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.cart-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cart-link::after {
  content: attr(data-count);
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

/* Dans le style scoped */
nav button {
  padding: 8px 16px;
  border-radius: 50px;
  background-color: transparent;
  border: 2px solid #4361ee;
  color: #4361ee;
  font-weight: 500;
  transition: all 0.3s ease;
}

nav button:hover {
  background-color: #4361ee;
  color: white;
}

.cart-link {
  padding: 8px 16px;
  border-radius: 50px;
  background-color: #4361ee;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
