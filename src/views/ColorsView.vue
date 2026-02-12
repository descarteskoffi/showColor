<template>
  <div class="container">
    <h2 class="title">Quelle est votre couleur préférée ?</h2>

    <div class="message-container">
      <transition name="slide-fade" mode="out-in">
        <p v-if="selectedColor" :style="{ color: selectedColor.value }" class="humeur-text">
          {{ getMessage(selectedColor.name) }}
        </p>
        <p v-else class="instruction">Cliquez sur une couleur...</p>
      </transition>
    </div>

    <div class="color-grid" :class="{ 'has-selection': selectedColor }">
      <button 
        v-for="color in colors" 
        :key="color.name" 
        v-show="!selectedColor || selectedColor.name === color.name" 
        @click="selectColor(color)" 
        :style="{ '--bg-color': color.value }"
        :class="['color-card', { 'is-selected': selectedColor }]"
      >
        <span class="color-dot" :style="{ backgroundColor: color.value }"></span>
        <span class="color-name">{{ color.name }}</span>
      </button>
    </div>
    
    <transition name="fade">
      <button v-if="selectedColor" @click="reset" class="reset-fab">
        <span class="icon">↺</span> Choisir une autre couleur
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const colors = ref([
  { name: 'Rouge', value: '#ff4d4d' },
  { name: 'Vert', value: '#2ecc71' },
  { name: 'Rose', value: '#ff69b4' },
  { name: 'Violet', value: '#9b59b6' },
  { name: 'Jaune', value: '#f1c40f' },
  { name: 'Bleu', value: '#3498db' },
  { name: 'Orange', value: '#e67e22' },
  { name: 'Turquoise', value: '#1abc9c' }
])

const selectedColor = ref(null)

// Dictionnaire de messages personnalisés
const messages = {
  'Rouge': 'Une énergie débordante et une passion prête à exploser ! 🔥',
  'Vert': 'Un besoin de calme, de nature et de renouveau. 🌿',
  'Rose': 'Douceur, tendresse et un soupçon d\'optimisme. ✨',
  'Violet': 'Un esprit créatif et une intuition profonde en éveil. 🔮',
  'Jaune': 'Rayonnez comme un soleil, le bonheur vous va bien ! ☀️',
  'Bleu': 'Sérénité absolue. Vous voguez sur un océan de tranquillité. 🌊',
  'Orange': 'Créativité, enthousiasme et une soif d\'aventure ! 🍊',
  'Turquoise': 'Un vent de fraîcheur et de clarté mentale. 💎'
}

const getMessage = (name) => messages[name] || "Superbe choix !"

const selectColor = (color) => {
  selectedColor.value = color
}

const reset = () => {
  selectedColor.value = null
}
</script>

<style scoped>
.container {
  font-family: 'Inter', system-ui, sans-serif;
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
  padding: 20px;
}

.title {
  color: #2c3e50;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 10px;
}

/* Zone du message */
.message-container {
  height: 60px; /* Hauteur fixe pour éviter les sauts de mise en page */
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.humeur-text {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
}

.instruction {
  color: #95a5a6;
  font-style: italic;
}

/* Grille */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.has-selection {
  grid-template-columns: 1fr;
  max-width: 320px;
  margin: 0 auto;
}

/* Cartes */
.color-card {
  border: none;
  background: #ffffff;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: all 0.4s ease;
  border: 1px solid #f0f0f0;
}

.color-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.is-selected {
  background-color: var(--bg-color);
  color: white;
  border: none;
  transform: scale(1.1);
  justify-content: center;
  font-size: 1.3rem;
}

.color-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

/* Bouton Reset */
.reset-fab {
  margin-top: 40px;
  background: #2c3e50;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: all 0.3s;
}

.reset-fab:hover {
  background: #1a252f;
  transform: scale(1.05);
}

/* Animations de transition de texte */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Animation de fondu simple */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>