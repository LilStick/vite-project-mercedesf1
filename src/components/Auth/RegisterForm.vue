<!-- src/components/Auth/RegisterForm.vue -->
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const error = ref("");

const authStore = useAuthStore();

const handleRegister = async () => {
  // Validation
  if (password.value !== confirmPassword.value) {
    error.value = "Les mots de passe ne correspondent pas";
    return;
  }

  if (password.value.length < 6) {
    error.value = "Le mot de passe doit faire au moins 6 caractères";
    return;
  }

  authStore.register(email.value, password.value, name.value);
};
</script>

<template>
  <form @submit.prevent="handleRegister" class="register-form">
    <div class="form-group">
      <label for="name">Nom complet</label>
      <input
        v-model="name"
        type="text"
        id="name"
        placeholder="Votre nom"
        required />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="Votre email"
        required />
    </div>

    <div class="form-group">
      <label for="password">Mot de passe</label>
      <input
        v-model="password"
        type="password"
        id="password"
        placeholder="Votre mot de passe"
        required />
    </div>

    <div class="form-group">
      <label for="confirmPassword">Confirmez le mot de passe</label>
      <input
        v-model="confirmPassword"
        type="password"
        id="confirmPassword"
        placeholder="Confirmez votre mot de passe"
        required />
    </div>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <button type="submit" class="submit-button">S'inscrire</button>
  </form>
</template>

<!-- src/components/Auth/LoginForm.vue et RegisterForm.vue -->
<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

input:focus {
  outline: none;
  border-color: var(--primary);
}

.submit-btn {
  width: 100%;
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
  margin-top: 1rem;
}

.submit-btn:hover {
  background-color: var(--primary-dark);
}

.toggle-auth {
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-light);
}

.toggle-btn {
  color: var(--primary);
  background: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
}

.error-message {
  color: var(--danger);
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;
}
</style>
