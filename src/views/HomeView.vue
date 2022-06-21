v<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <div class="about-page about-desc">
    <h1> Strona Szkolnego Radiowęzła </h1>
    <div>
      <span>Strona jest w bardzo wczesnym stadium programowania. <br></span>
      <span>Jedyną funkcjonalnością dostępną w tym momencie jest wyświetlenie <a href="/audition">listy audycji</a>, lecz ta strona także zawiera błędy.<br><br></span>
      <span style="font-weight: bold;">Prosimy o zgłaszanie wszystkich błędów do <a href="https://github.com/Norbiros">Developera</a> strony!</span>
    </div>
    <div class="icons">
      <a href="https://www.facebook.com/profile.php?id=100073312808719" target="_blank" class="c-link c-link--facebook c-tooltip" aria-label="Facebook">
        <svg class="c-icon"><use xlink:href="#icon--facebook"></use></svg>
      </a>
      <a href="https://instagram.com" target="_blank" class="c-link c-link--instagram c-tooltip" aria-label="Instagram">
        <svg class="c-icon"><use xlink:href="#icon--instagram"></use></svg>
      </a>

      <svg style="display: none">
        <symbol id="icon--facebook" viewBox="0 0 24 24">
          <path d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
        </symbol>
        <symbol id="icon--instagram" viewBox="0 0 24 24">
          <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
        </symbol>
      </svg>
    </div>
  </div>
</template>

<style>
.about-desc {
  position: fixed;
  top: 50%;
  width: 100%;
  height: 100%;
  margin-top: -75px;
  text-align: center;
}

.icons {
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    font: 16px Roboto, sans-serif;
    margin-top: 25px;
}

.icons a {
    text-decoration: none;
    color: inherit;
}

.c-icon {
    width:  36px;
    height: 36px;
    fill: currentColor;
    transition: .2s;
}

.c-link--facebook:hover  { color: #3b5998 }
.c-link--instagram:hover { color: #833ab4 }
.c-link--facebook:hover::after  { background: #3b5998 }
.c-link--instagram:hover::after { background: #833ab4 }

.c-link {
    position: relative;
    color: #bbb;
}

.c-link:not(:last-of-type) {
    margin-right: 15px;
}



.pens-link-container {
    flex-basis: 100%;
    font-size: .9rem;
    text-align: center;
}

.pens-link {
    margin-bottom: 0;
    background: white;
    box-shadow: 0 4px 18px rgba(0, 0, 0, .1);
    border: none;
}
</style>
