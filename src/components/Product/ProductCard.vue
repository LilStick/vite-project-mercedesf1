<script setup>
defineProps({
  product: Object,
});

const emit = defineEmits(["add-to-cart"]);
</script>

<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>Prix: {{ product.price }}€</p>
    <button @click="emit('add-to-cart')">Ajouter au panier</button>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.product-price {
  color: var(--primary);
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.product-description {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.add-to-cart {
  width: 100%;
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.add-to-cart:hover {
  background-color: var(--primary-dark);
}

.add-to-cart {
  width: 100%;
  padding: 12px;
  border-radius: 50px;
  background-color: #4361ee;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart:hover {
  background-color: #3a86ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
