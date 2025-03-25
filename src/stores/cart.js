import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);
  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  const count = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  // Simulation de produits
  const products = ref([
    {
      id: 1,
      name: "Casquette F1 Mercedes",
      price: 10,
      description: "Très belle casquette F1 Mercedes du goat Lewis Hamilton",
    },
    {
      id: 2,
      name: "Maillot f1 Mercedes",
      price: 20,
      description: "Maillot Mercedes de l'écurie Mercedes",
    },
    {
      id: 3,
      name: "Casque Lewis Hamilton",
      price: 30,
      description: "Casque emblématique de Lewis Hamilton de la saison 2021",
    },
  ]);

  function addToCart(productId) {
    const product = products.value.find((p) => p.id === productId);
    const existingItem = items.value.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  }

  function removeFromCart(productId) {
    items.value = items.value.filter((item) => item.id !== productId);
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find((item) => item.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  // Persistance du panier
  function initialize() {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      items.value = JSON.parse(storedCart);
    }
  }

  watch(
    items,
    (newItems) => {
      localStorage.setItem("cart", JSON.stringify(newItems));
    },
    { deep: true }
  );

  return {
    items,
    products,
    total,
    count,
    addToCart,
    removeFromCart,
    updateQuantity,
    initialize,
  };
});
