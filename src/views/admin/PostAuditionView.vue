<template>
  <div class="about center" style="padding-top: 30px">
    <h1>Tworzenie nowej audycji</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Tytuł</label>
        <input class="form-control" name="username" type="text"/>
      </div>
      <div class="form-group">
        <label htmlfor="email">Opis</label>
        <textarea
            class="form-control"
            name="email"
            style="height: 250px; resize: none"
            type="text"
        />
      </div>
      <div class="form-group" style="text-align: center">
        <div
            :class="{ show: error != null, 'is-valid': !error }"
            class="invalid-feedback"
            style="display: none"
        >
          {{ errorMessage }}
        </div>
        <button class="btn btn-primary green-btn">Wyślij Audycję</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.show {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
  display: block !important;
  margin-bottom: 10px;
}

.is-valid {
  color: #04945e;
}

.green-btn {
  background-color: #04aa6d;
}

.green-btn:hover {
  border-color: #008e5a !important;
  background: #04945e !important;
}

.center {
  flex: 0 0 50%;
  max-width: 60%;
  margin-left: 20%;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      error: null,
      errorMessage: null,
    };
  },
  methods: {
    async handleSubmit(e) {
      let title = e.target[0].value;
      let description = e.target[1].value;
      let comp = this;

      if (!title || !description) {
        this.errorMessage = "Musisz podać tytuł oraz opis audycji!";
        this.error = true;
        return;
      }

      axios
          .post(`${import.meta.env.VITE_API_URL}/broadcast`, {
            title: title,
            description: description,
          })
          .then(function (el) {
            comp.errorMessage = el.data;
            comp.error = false;
          })
          .catch(function (error) {
            comp.errorMessage = error.response.data;
            comp.error = true;
          });
    },
  },
};
</script>
