<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <div class="navbar">
    <RouterLink to="/"><img alt="Logo" class="logo" src="@/assets/logo.png" /></RouterLink>

    <div class="links">
      <RouterLink to="/">Strona Główna</RouterLink>
      <RouterLink to="/audition">Audycje</RouterLink>
      <RouterLink to="/about">Informacje</RouterLink>
      <RouterLink to="/login"><img alt="Login" class="logo" src="@/assets/login.png" /></RouterLink>
    </div>
  </div>

  <div class="body">
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/components.css';

.body > div {
  display: block !important;
}

.navbar {
  height: 60px;
  background: var(--nav-background);
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 100;
  top: 0px;
}

.links img {
  width: 25px;
  height: 25px;
  position: fixed;
  top: 17.5px;
}

.links {
  right: 25px;
  position: fixed;
}

.logo {
  height: 50px;
  width: 50px;
}

.body {
  margin-top: 70px;
}

.navbar {
  width: 100%;
  font-size: 12px;
  text-align: center;
  border-left: 1px solid var(--color-border);
  height: 60px;
  position: fixed;
}


.navbar a {
  color: var(--color-text);
  text-decoration: none;
  -webkit-transition: all .2s;
  -moz-transition: all .2s;
  -o-transition: all .2s;
  transition: all .2s;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.navbar a.router-link-exact-active {
  font-weight: bold;
}

a.router-link-exact-active > img {
  filter: drop-shadow(0 0 0.2px black);
}

.navbar a:hover:not(.router-link-exact-active) {
  text-shadow:
    -0.2px -0.2px 0 var(--color-text),
    0.2px -0.2px 0 var(--color-text);
}

.navbar a:first-of-type {
  border: 0;
}


</style>
