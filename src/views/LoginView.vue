<template>
  <div class="about centred" style="padding-top: 80px">
    <h1 style="margin-bottom: 40px">Logowanie do systemu</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Nazwa użytkownika</label>
        <input class="form-control" name="username" type="text"/>
        <div
            :class="{ 'is-invalid': submitted && !username }"
            class="invalid-feedback"
            style="display: none"
        >
          Imie jest wymagane
        </div>
      </div>
      <div class="form-group">
        <label htmlfor="password">Hasło</label>
        <input class="form-control" name="password" type="password"/>
        <div
            :class="{ 'is-invalid': submitted && !password }"
            class="invalid-feedback"
            style="display: none"
        >
          Hasło jest wymagane
        </div>
      </div>
      <div class="form-group" style="text-align: center">
        <div
            :class="{ show: error != null, 'is-valid': !error }"
            class="invalid-feedback"
            style="display: none"
        >
          {{ errorMessage }}
        </div>
        <button class="btn btn-primary btn-block" style="margin-top: 10px">Loguj</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
label {
  display: inline-block;
  margin-bottom: 0.1rem;
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

.centred {
  flex: 0 0 50%;
  max-width: 30%;
  margin-left: 35%;
}

.is-invalid {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
  display: block !important;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      error: null,
      errorMessage: null,
    };
  },
  methods: {
    async handleSubmit(e) {
      this.submitted = true;
      this.username = e.target[0].value;
      this.password = e.target[1].value;
      let comp = this;
      if (!!this.username && !!this.password) {
        axios
            .post(`${import.meta.env.VITE_API_URL}/auth/login`, {
              username: this.username,
              password: this.password,
            })
            .then(function (el) {
              comp.errorMessage = el.data;
              comp.error = false;
              window.location.href = "/admin";
            })
            .catch(function (error) {
              comp.errorMessage = error.response.data;
              comp.error = true;
            });
      }
    },
  },
};
</script>
