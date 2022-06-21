<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <div class="about-page about-desc">
    <h1> Strona Szkolnego Radowezła </h1>
    <div> 
      Strona jest w bardzo wczesnym stadium powstawania. <br>
      Jedyną funkcjonalnością dostępną w tym momęcie jest wyświetlenie <a href="/audition">listy audycji</a>, lecz ta strona także zawiera błędy.<br><br>
      Twórcą strony jest <a href="https://github.com/Norbiros">Norbert</a>, więc prosimy o zgłaszanie wszystkich błędów do niego!
    
    </div>
  </div>
</template>

<style>
.about-desc {
  position: fixed;
  top: 50%;
  width: 100%;
  height: 100%;
  margin-top: -50px;
  text-align: center;
}
</style>
