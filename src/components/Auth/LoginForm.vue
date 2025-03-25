<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const handleLogin = () => {
  authStore.login(email.value, password.value);
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" type="email" placeholder="Email" required />
    <input
      v-model="password"
      type="password"
      placeholder="Mot de passe"
      required />
    <button type="submit">Se connecter</button>
  </form>
</template>

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
