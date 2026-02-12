<script setup>
</script>

<template>
  <div class="home-container">
    <div class="hero-content">
      <span class="emoji">👋</span>
      <h1>Salut !</h1>
      <h2>Bienvenue sur <span class="brand">Colorys, un monde aux couleurs du bonheur</span>😊</h2>

      <router-link :to="{ name: 'colors' }" class="cta-button">
        Explorez nos couleurs
        <span class="arrow">→</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.hero-content {
  max-width: 600px;
  animation: fadeIn 0.8s ease-out;
}

.emoji {
  font-size: 3rem;
  display: block;
  margin-bottom: 10px;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0;
}

h2 {
  font-size: 1.8rem;
  color: #7f8c8d;
  font-weight: 300;
  margin-top: 10px;
}

.brand {
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  position: relative;
}

p {
  color: #636e72;
  font-size: 1.1rem;
  margin: 25px 0 40px;
  line-height: 1.6;
}

.cta-button {
  margin-top:40px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  color: white;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(139, 145, 142, 0.3);
}

.cta-button:hover {
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  transform: translateY(-3px);
  box-shadow: 0 15px 25px rgba(139, 145, 142, 0.3);
}

.arrow {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.4rem;
  }
}
</style>
