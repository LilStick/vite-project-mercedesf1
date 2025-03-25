<script setup>
import { useCartStore } from "../../stores/cart";
import { ref, watch } from "vue";

const cartStore = useCartStore();

// Fonction pour mettre à jour la quantité
const updateItemQuantity = (productId, quantity) => {
  if (quantity > 0) {
    cartStore.updateQuantity(productId, quantity);
  } else {
    cartStore.removeFromCart(productId);
  }
};
</script>

<template>
  <div class="cart-view">
    <h1>Votre panier</h1>

    <div v-if="cartStore.items.length === 0">
      <p>Votre panier est vide</p>
    </div>

    <div v-else>
      <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>Prix unitaire: {{ item.price }}€</p>

        <div class="quantity-control">
          <button @click="updateItemQuantity(item.id, item.quantity - 1)">
            -
          </button>
          <span>{{ item.quantity }}</span>
          <button @click="updateItemQuantity(item.id, item.quantity + 1)">
            +
          </button>
        </div>

        <p>Total: {{ (item.price * item.quantity).toFixed(2) }}€</p>
        <button @click="cartStore.removeFromCart(item.id)">Supprimer</button>
      </div>

      <div class="cart-total">
        <h3>Total: {{ cartStore.total.toFixed(2) }}€</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin: 2rem auto;
  max-width: 800px;
}

.cart-header {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-weight: 600;
}

.cart-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-name {
  font-weight: 500;
}

.item-price {
  color: var(--text-light);
  font-size: 0.9rem;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-control button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border-color);
  background: white;
  border-radius: 4px;
  font-size: 1rem;
}

.quantity-control input {
  width: 50px;
  text-align: center;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.item-total {
  font-weight: 600;
}

.remove-btn {
  background: none;
  border: none;
  color: var(--danger);
  font-size: 1.5rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.remove-btn:hover {
  background-color: rgba(255, 68, 68, 0.1);
}

.cart-summary {
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: right;
}

.cart-total {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.checkout-btn {
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.checkout-btn:hover {
  background-color: var(--primary-dark);
}

.empty-cart,
.auth-alert {
  text-align: center;
  padding: 3rem;
  background-color: var(--light-gray);
  border-radius: 8px;
  margin-top: 2rem;
}

.empty-cart p,
.auth-alert p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.products-link,
.auth-link {
  color: var(--primary);
  font-weight: 500;
  transition: color 0.2s ease;
}

.products-link:hover,
.auth-link:hover {
  color: var(--primary-dark);
}

.quantity-control button {
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 50%;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn {
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 50%;
  background-color: #ff4444;
  color: white;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkout-btn {
  padding: 16px 32px;
  border-radius: 50px;
  background-color: #4cc9f0;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
  margin-top: 20px;
}
</style>
