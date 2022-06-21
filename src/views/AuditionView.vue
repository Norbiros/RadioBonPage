<template>
  <div class="about">
    <h1>Audycje Radiowęzła</h1>
    <div class="broadcast-page-desc"> Tutaj przeczytasz wszystkie nasze audycje! </div>
    <ul>
      <li v-for="broadcast in broadcasts">
        <p>{{ broadcast["Title"] }}</p>
        <div class="broadcasts-desc">{{ broadcast["Description"] }}</div>
      </li>
    </ul>
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
}
</style>


<script>
export default {
  data() {
    return {
      broadcasts: [],
      error: "",
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("https://radiobon-api.herokuapp.com/broadcasts");
        let broadcasts = await response.json();
        this.broadcasts = broadcasts.filter(function (e) { return e != null; });
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>
