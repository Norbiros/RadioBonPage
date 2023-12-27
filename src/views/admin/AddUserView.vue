<template>
  <div class="about center" style="padding-top: 30px">
    <h1>Dodawanie Użytkowników</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Nazwa użytkownika</label>
        <input class="form-control" name="username" type="text"/>
      </div>
      <div class="form-group">
        <label for="password">Hasło</label>
        <input class="form-control" name="password" type="password"/>
      </div>
      <div class="form-group">
        <label for="username">Uprawnienia</label>
        <select class="form-control" name="permissions">
          <option value="user">Użytkownik</option>
          <option value="admin">Administrator</option>
          <option value="root">Root</option>
        </select>
      </div>

      <div class="form-group" style="text-align: center">
        <div
            :class="{ show: error != null, 'is-valid': !error }"
            class="invalid-feedback"
            style="display: none"
        >
          {{ errorMessage }}
        </div>
        <button class="btn btn-primary green-btn">Dodaj Użytkownika</button>
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
      let username = e.target[0].value;
      let password = e.target[1].value;
      let permission = e.target[2].options[e.target[2].selectedIndex].value;
      console.log(permission);
      let comp = this;

      if (!username || !password) {
        this.errorMessage = "Musisz podać nazwę oraz hasło użytkownika!";
        this.error = true;
        return;
      }

      axios
          .post(`${import.meta.env.VITE_API_URL}/register`, {
            username: username,
            password: password,
            permission: permission
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
