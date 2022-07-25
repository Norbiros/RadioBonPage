<template>
  <div class="about center" style="padding-top: 30px;">
    <h1>Tworzenie nowej audycji</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Tytuł</label>
        <input type="text" name="username" class="form-control">
      </div>
      <div class="form-group">
        <label htmlfor="email">Opis</label>
        <textarea style="height: 250px; resize: none;" type="text" name="email" class="form-control"/>
      </div>
      <div class="form-group" style="text-align: center">
        <div class="invalid-feedback" style="display: none;" :class="{ 'show': error != null, 'is-valid': !error  }">{{ errorMessage }}</div>
        <button class="btn btn-primary green-btn">Wyślij Audycję</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
label {
    display: inline-block;
    margin-bottom: .5rem;
}

.show {
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #dc3545;
  display: block !important;
  margin-bottom: 10px;
}

.is-valid {
  color: #04945e;
}

.green-btn {
  background-color: #04AA6D;
}

.green-btn:hover {
  border-color: #008E5A !important;
  background: #04945e !important;
}

.center {
  flex: 0 0 50%;
  max-width: 60%;
  margin-left: 20%;
}
</style>


<script>
export default {
    data () {
        return {
            error: null,
            errorMessage: null
        }
    },
    methods: {
        async handleSubmit (e) {
            let title = e.target[0].value;
            let description = e.target[1].value;

            if (!title || !description) {
              this.errorMessage = "Musisz podać tytuł oraz opis audycji!";
              this.error = true;
              return;
            }

            try {
              const response = await fetch("https://radiobon-api.herokuapp.com/broadcast", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `title=${title}&description=${description}`
              });
              if (response.status != 200) {
                this.errorMessage = (await response.json()).message;
                this.error = true;
                return;
              }
              this.error = false;
              this.errorMessage = "Pomyślnie dodano audycję!";
            } catch (e) {
              this.error = true;
              this.errorMessage = e;
            }
        }
    }
};
</script>