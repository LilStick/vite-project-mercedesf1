<script setup>
import LoginForm from "../components/Auth/LoginForm.vue";
import RegisterForm from "../components/Auth/RegisterForm.vue";
import { ref } from "vue";

const isLogin = ref(true);
</script>

<template>
  <div class="auth-view">
    <LoginForm v-if="isLogin" />
    <RegisterForm v-else />

    <button @click="isLogin = !isLogin">
      {{ isLogin ? "Créer un compte" : "Se connecter" }}
    </button>
  </div>
</template>
