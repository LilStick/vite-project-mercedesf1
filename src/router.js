import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ProductsView from "./views/ProductsView.vue";
import AuthView from "./views/AuthView.vue";
import CartView from "./components/Cart/CartView.vue"; // Import ajouté
import { useAuthStore } from "./stores/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
      meta: { requiresGuest: true },
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView, // Nouvelle route ajoutée
      meta: { requiresAuth: true }, // Protection par authentification
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "auth" });
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
