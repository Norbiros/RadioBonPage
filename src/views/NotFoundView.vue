<template>
  <div class="about">
    <div id="notfound-outer">
      <h1>404</h1>
      <div style="text-align: center">
        Nie znaleziono podanej strony!<br>
        Przejdź na <a href="/">Stronę Główną</a>, aby zobaczyć inne strony!
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

#notfound-outer {
  position: fixed;
  top: 40%;
  width: 100%;
  height: 100%;
}

</style>
