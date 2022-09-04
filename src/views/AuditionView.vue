<template>
  <div class="about">
    <h1>Audycje Radiowęzła</h1>
    <div class="broadcast-page-desc">
      Tutaj przeczytasz wszystkie nasze audycje!
    </div>
    <div id="loading" v-if="!isLoaded">
      <img
        class="img"
        src="@/assets/loading.svg"
        alt="Loading..."
        width="200"
      />
    </div>
    <div v-if="error">
      <div id="errors">
        <h1>Podczas ładowania wystąpił błąd!</h1>
        <span> {{ errorName }}: {{ errorMessage }} </span> <br />
        <span style="font-weight: bold">
          Skontaktuj się z
          <a href="mailto:norbiros@protonmail.com">Developerem</a> aby zgłosić
          ten błąd!</span
        >
      </div>
    </div>
    <ul>
      <li v-for="broadcast in broadcasts">
        <p>{{ broadcast.title }}</p>
        <pre class="broadcasts-desc">{{ broadcast.description }}</pre>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}

pre {
  white-space: pre-line;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 20px;
}

.about {
  display: inline;
}

h1 {
  text-align: center;
  font-weight: bold;
}

.broadcast-page-desc {
  text-align: center;
  font-size: 10px;
}

li {
  border: 1px solid gray;
  margin: 10px;
  border-radius: 10px 10px 0px 0px;
}

p {
  background: var(--text-nav-background);
  padding-left: 5px;
  font-weight: bold;
  border-radius: 10px 10px 0px 0px;
}

.broadcasts-desc {
  padding: 5px 10px;
  background: var(--text-background);
  font-family: unset;
}

#loading {
  text-align: center;
}

#errors {
  width: 550px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 0, 0, 0.59);
  padding: 10px 15px;
  border: 5px solid red;
  border-radius: 10px;
  margin-top: 45px;
}
</style>

<script>
export default {
  data() {
    return {
      broadcasts: [],
      errorName: "",
      errorMessage: "",
      error: false,
      isLoaded: false,
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch(
          `${import.meta.env.VITE_API_URL}/broadcasts`
        );
        let broadcasts = await response.json();
        broadcasts = broadcasts.reverse();
        this.broadcasts = broadcasts.filter(function (e) {
          return e != null;
        });
      } catch (error) {
        console.log(error);
        console.log(error.name);
        this.errorName = error.name;
        this.errorMessage = error.message;
        this.error = true;
      }
      this.isLoaded = true;
    },
  },

  created() {
    this.getData();
  },
};
</script>
