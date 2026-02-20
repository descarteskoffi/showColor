<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authService } from "@/services/authService";

const router = useRouter();

const email = ref("");
const password = ref("");
const errorMesssage = ref("");
function login() {
  const connected = authService.login({
    email: email.value,
    password: password.value,
  });

  if (connected) {
    router.push("/home");
  } else {
    errorMesssage.value = "Email ou mot de passe incorrect";
    router.push("/");
  }
}
</script>

<template>
  <div class="connexion">
    <div class="form glass-form">
      <h2>Connectez-vous</h2>
      <form @submit.prevent="login">
        <label for="email">Email</label>
        <input v-model="email" type="email" />
        <label for="password">Password</label>
        <input v-model="password" type="password" />
        <p v-if="errorMesssage" class="error">{{ errorMesssage }}</p>
        <button type="submit" class="logout">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.connexion {
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 20px;
  width: 25rem;
  padding-block: 20px;
  padding-inline: 20px;
  margin: 50px;
  gap: 1rem;
}
input {
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
button {
}
.error {
  font-size: 10px;
  color: red;
}
.password-container {
  display: flex;
  align-items: center;
  position: relative;
}

.input-group {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.password-icon {
  position: absolute;
  right: 290px;
  bottom: 687px;
  cursor: pointer;
  color: #777;
  transition: color 0.3s;
}

.password-icon:hover {
  color: #333;
}
.logout {
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border-radius: 8px;
  width: 80%;
  padding: 10px;
  border: none;
  color: #fff;
  margin-inline: 35px;
}

label {
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
