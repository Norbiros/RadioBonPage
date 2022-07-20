<template>
  <div class="about disable-scroll" style="padding-top: 30px;">
    <div id="loggin-form">
      <h1>Logowanie / Rejestracja</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Imie</label>
          <input type="text" name="username" class="form-control">
          <div class="invalid-feedback" style="display: none;" :class="{ 'is-invalid': submitted && !username }">Imie jest wymagane</div>
        </div>
        <div class="form-group">
          <label htmlfor="email">E-Mail (z teams)</label>
          <input type="text" autocomplete="email" name="email" class="form-control">
          <div class="invalid-feedback" style="display: none;" :class="{ 'is-invalid': submitted && !mail }">Email jest wymagany</div>
          <div class="invalid-feedback" style="display: none;" :class="{ 'is-invalid': (submitted && !validMail) && !!mail  }">Podany email jest nie prawidłowy</div>
        </div>
        <div class="form-group">
          <label htmlfor="password">Hasło</label>
          <input type="password" name="password" class="form-control">
          <div class="invalid-feedback" style="display: none;" :class="{ 'is-invalid': submitted && !password }">Hasło jest wymagane</div>
        </div>
        <div class="form-group" style="text-align: center">
          <button class="btn btn-primary">Login</button>
          <!-- <a href="/register" class="btn btn-link">Register</a> -->
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
label {
    display: inline-block;
    margin-bottom: .5rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#loggin-form {
  flex: 0 0 50%;
  max-width: 50%;
  margin-left: 25%;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  cursor: pointer;
}

.disable-scroll {
  position: fixed;
  width: 100%;
  height: 100%;
}

.is-invalid {
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #dc3545;
  display: block !important;
}
</style>


<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            mail: '',
            validMail: false,
            submitted: false
        }
    },
    methods: {
        handleSubmit (e) {
            this.validMail = /.+\..+@sp40krakow\.onmicrosoft\.com/.test(e.target[1].value);
            this.submitted = true;
            this.username = e.target[0].value;
            this.mail = e.target[1].value;
            this.password = e.target[2].value;
        }
    }
};
</script>