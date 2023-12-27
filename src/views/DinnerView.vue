<template>
  <div class="about">
    <h1 style="margin-top: 100px">Menu</h1>
    <div class="broadcast-page-desc">
      Tutaj przeczytasz wszystkie nasze audycje!
    </div>
    <div v-if="!isLoaded" id="loading">
      <img
          alt="Loading..."
          class="img"
          src="@/assets/loading.svg"
          width="200"
      />
    </div>
    <div v-if="error">
      <div id="errors">
        <h1>Podczas ładowania wystąpił błąd!</h1>
        <span> {{ errorName }}: {{ errorMessage }} </span> <br/>
        <span style="font-weight: bold">
          Skontaktuj się z
          <a href="mailto:norbiros@protonmail.com">Developerem</a> aby zgłosić
          ten błąd!</span
        >
      </div>
    </div>
    <ul class="ul">
      <li v-for="broadcast in broadcasts" class="title">
        <p v-if="date===broadcast.date" style="background-color: #91e9e9;">{{ broadcast.date }} <span
            v-if="isGood(broadcast.text)"
            class="h">❤️</span>
        </p>
        <p v-if="date!==broadcast.date">{{ broadcast.date }} <span v-if="isGood(broadcast.text)" class="h">❤️</span></p>
        <pre class="broadcasts-desc">{{ broadcast.text }}</pre>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  margin: 20px 0;
}

.ul {
  grid-template-columns: repeat( 1, 1fr );
  margin-left: 25%;
  list-style: none;
  padding: 0;
  display: grid;
  gap: 10px;
}

@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }

  .title {
    margin: 30px 20px;
  }

  .ul {
    margin: 30px;
    grid-template-columns: repeat( 5, 1fr );
  }
}


pre {
  white-space: pre-line;
}

.about {
  display: inline;
}

.h {
  float: right;
}

h1 {
  text-align: center;
  font-weight: bold;
  margin-top: 0;
}

.broadcast-page-desc {
  text-align: center;
  font-size: 13px;
}

.title {
  border: 1px solid gray;
  border-radius: 10px 10px 3px 3px;
  width: 250px;
}

p {
  background: var(--text-nav-background);
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
}

.broadcasts-desc {
  padding: 10px 10px 15px 10px;
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
      date: "",
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch(
            `${import.meta.env.VITE_API_URL}/dinnerData`
        );
        let broadcasts = await response.json();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');

        this.broadcasts = broadcasts.filter(function (e) {
          return e != null && (parseInt(dd) <= parseInt(e.date.split(".")[0]));
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
    async loadDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yy = today.getFullYear().toString().substring(2);

      this.date = dd + '.' + mm + '.' + yy;
    },
    isGood(x) {
      const y = x.toLowerCase();
      return y.includes("pierogi") || y.includes("naleśniki") || y.includes("rosół");

    }
  },

  created() {
    this.getData();
    this.loadDate();
  },
};
</script>
