<template>
  <div class="about centred" style="padding-top: 30px;">
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
        <button class="btn btn-primary">Loguj / Rejestruj</button>
        <!-- <a href="/register" class="btn btn-link">Register</a> -->
      </div>
    </form>
  </div>
</template>

<style scoped>
label {
    display: inline-block;
    margin-bottom: .5rem;
}



.centred {
  flex: 0 0 50%;
  max-width: 50%;
  margin-left: 25%;
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