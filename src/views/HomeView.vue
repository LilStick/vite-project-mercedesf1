<script setup>
import { useAuthStore } from "../stores/auth";
import { useCartStore } from "../stores/cart";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const authStore = useAuthStore();
const cartStore = useCartStore();

const featuredProducts = ref([]);

onMounted(() => {
  // Sélectionne 3 produits phares
  featuredProducts.value = [
    cartStore.products[0],
    cartStore.products[1],
    cartStore.products[2],
  ];
});

const handleImageError = (event) => {
  event.target.src =
    "https://via.placeholder.com/300x300?text=Image+Indisponible";
};
</script>

<template>
  <div class="home-container">
    <!-- Hero Banner -->
    <div class="hero-banner">
      <div class="hero-content">
        <h1>MERCEDES-AMG PETRONAS <span>FORMULA ONE TEAM</span></h1>
        <p>Boutique officielle - Collection 2023</p>
        <RouterLink :to="{ name: 'products' }" class="cta-button">
          VOIR LA COLLECTION
        </RouterLink>
      </div>
    </div>

    <!-- Featured Products -->
    <section class="featured-section">
      <h2>NOS PRODUITS PHARES</h2>
      <div class="products-grid">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="product-card">
          <div class="image-container">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
              loading="lazy"
              @error="handleImageError" />
          </div>
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }}€</p>
          <button @click="cartStore.addToCart(product.id)" class="add-to-cart">
            AJOUTER AU PANIER
          </button>
        </div>
      </div>
      <RouterLink :to="{ name: 'products' }" class="view-all">
        VOIR TOUS LES PRODUITS →
      </RouterLink>
    </section>

    <!-- Team Info -->
    <section class="team-section">
      <div class="team-content">
        <h2>L'ÉCURIE À HUIT TITRES</h2>
        <p>
          Découvrez les produits officiels de la légendaire écurie Mercedes-AMG
          Petronas Formula One Team. Chaque article reflète l'excellence et
          l'innovation qui ont conduit l'équipe à remporter huit titres
          consécutifs de championnat du monde des constructeurs.
        </p>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">8</div>
            <div class="stat-label">Titres Constructeurs</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">7</div>
            <div class="stat-label">Titres Pilotes</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">125+</div>
            <div class="stat-label">Victoires en GP</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Auth CTA -->
    <section v-if="!authStore.isAuthenticated" class="auth-cta">
      <h3>REJOIGNEZ LA COMMUNAUTÉ MERCEDES-AMG F1</h3>
      <p>
        Créez un compte pour bénéficier d'avantages exclusifs et suivre vos
        commandes
      </p>
      <RouterLink :to="{ name: 'auth' }" class="cta-button"
        >S'INSCRIRE / SE CONNECTER</RouterLink
      >
    </section>
  </div>
</template>

<style scoped>
.home-container {
  font-family: "Titillium Web", Arial, sans-serif;
  color: #fff;
}

.hero-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/mercedes-f1-banner.jpg") center/cover;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-content h1 span {
  color: #00d2be; /* Teal Petronas */
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background-color: #00d2be;
  color: #000;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.featured-section {
  padding: 80px 20px;
  background-color: #000;
  text-align: center;
}

.featured-section h2 {
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #fff;
  position: relative;
  display: inline-block;
}

.featured-section h2::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: #00d2be;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.product-card {
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  padding-bottom: 20px;
}

.product-card:hover {
  transform: translateY(-10px);
}

.image-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-card h3 {
  font-size: 1.2rem;
  margin: 15px 0 10px;
  padding: 0 15px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00d2be;
  margin-bottom: 15px;
}

.add-to-cart {
  background-color: #00d2be;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart:hover {
  background-color: #fff;
}

.view-all {
  display: inline-block;
  color: #00d2be;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.view-all:hover {
  color: #fff;
}

.team-section {
  background: linear-gradient(rgba(0, 210, 190, 0.1), rgba(0, 210, 190, 0.1)),
    url("/images/mercedes-team.jpg") center/cover;
  padding: 100px 20px;
  text-align: center;
}

.team-content {
  max-width: 800px;
  margin: 0 auto;
}

.team-section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #fff;
}

.team-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.stat-item {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px 20px;
  border-radius: 8px;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #00d2be;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 1rem;
  text-transform: uppercase;
}

.auth-cta {
  background-color: #000;
  padding: 80px 20px;
  text-align: center;
}

.auth-cta h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #00d2be;
}

.auth-cta p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .featured-section h2,
  .team-section h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .cta-button {
    padding: 12px 24px;
    font-size: 1rem;
  }
}
</style>
