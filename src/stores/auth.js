// src/stores/auth.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import CryptoJS from "crypto-js";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);
  const simulatedUsers = ref([]);

  function register(email, password, name) {
    try {
      console.log("[Register] Mot de passe original:", password);

      // Hachage SHA-256
      const passwordHash = CryptoJS.SHA256(password).toString();
      console.log("[Register] Mot de passe haché:", passwordHash);

      const newUser = {
        id: Date.now(),
        email,
        name,
        passwordHash,
      };

      simulatedUsers.value.push(newUser);
      user.value = { id: newUser.id, email: newUser.email, name: newUser.name };
      localStorage.setItem("user", JSON.stringify(user.value));

      console.log("[Register] Utilisateur créé avec succès");
      return true;
    } catch (error) {
      console.error("[Register] Erreur:", error);
      return false;
    }
  }

  function login(email, password) {
    try {
      console.log("[Login] Tentative de connexion pour:", email);

      const passwordHash = CryptoJS.SHA256(password).toString();
      console.log("[Login] Mot de passe haché:", passwordHash);

      const foundUser = simulatedUsers.value.find(
        (u) => u.email === email && u.passwordHash === passwordHash
      );

      if (foundUser) {
        user.value = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
        };
        localStorage.setItem("user", JSON.stringify(user.value));
        console.log("[Login] Connexion réussie");
        return true;
      }

      console.log("[Login] Échec: email ou mot de passe incorrect");
      return false;
    } catch (error) {
      console.error("[Login] Erreur:", error);
      return false;
    }
  }

  function logout() {
    try {
      user.value = null;
      localStorage.removeItem("user");
      console.log("[Logout] Déconnexion réussie");
      return true;
    } catch (error) {
      console.error("[Logout] Erreur:", error);
      return false;
    }
  }

  function initialize() {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        user.value = JSON.parse(storedUser);
        console.log("[Initialize] Utilisateur restauré depuis localStorage");
      }
      return true;
    } catch (error) {
      console.error("[Initialize] Erreur:", error);
      return false;
    }
  }

  return {
    user,
    isAuthenticated,
    register,
    login,
    logout,
    initialize,
  };
});
