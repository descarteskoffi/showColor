<script setup>
import { useRouter } from "vue-router";
import { authService } from "./services/authService";

 const router = useRouter();
    const isLoggedOut = () => {
        authService.logOut();
        router.push("/");
    };

</script>

<template>
  <div >
    <nav v-if="!$route.meta.hideNav">
      <h1>Colorys</h1>
      <router-link :to="{ name: 'home' }">Accueil</router-link>
      <router-link :to="{ name: 'colors' }">Mes couleurs</router-link>
      <button @click="isLoggedOut" class="logout">Déconnexion</button>
    </nav>

    <main>
      <div>          
        <router-view/>
      </div>
    </main>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  background-color: #f5f7fa;
  color: #2d3436;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5%;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav h1 {
  font-size: 1.5rem;
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  letter-spacing: -1px;
}

nav a {
  text-decoration: none;
  color: #636e72;
  font-weight: 500;
  margin-left: 2rem;
  transition: color 0.3s ease;
  position: relative;
  font-weight: bold;
}

nav a:hover,
nav a.router-link-active {
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.badge {
  position: absolute;
  top: -8px;
  right: -15px;
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(255, 71, 87, 0.4);
}

main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 20px;
}

.fade-enter-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  transform: translateX(100px);
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.logout{
  border: none;
  background-color: #fff;
}

</style>
