<template>
  <div class="about center" style="padding-top: 30px">
    <h1 style="margin-bottom: 15px">Panel Administratora</h1>

    <AdminLink
        color="#00ffe3"
        description="Kliknij, aby dodać nową audycję z opisem i tytułem!"
        title="Dodaj nową audycję"
        to="/admin/postAudition"
    ></AdminLink>
    <AdminLink
        v-if="isRoot"
        color="orange"
        description="Kliknij, aby nowego użytkownika!"
        title="Dodaj użytkownika (ROOT ONLY)"
        to="/admin/addUser"
    ></AdminLink>
    <AdminLink
        class="disabled"
        color="lightgray"
        description="Wygeneruj scenariusz składający się z informacji jak: nietypowe święta lub ogłoszenia z librusa."
        title="Wygeneruj audycję (WIP)"
        to=""
    ></AdminLink>
  </div>
</template>

<style>
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.center {
  flex: 0 0 50%;
  max-width: 60%;
  margin-left: 20%;
}

.admin-button-link div {
  border: 2px solid gray;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out;
}

.admin-button-link h2 {
  font-weight: bold;
}

.disabled div {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.7;
  user-select: none;
}

.disabled {
  pointer-events: none;
}

.admin-button-link div:hover {
  transform: translate3d(15px, 0px, 0px);
}
</style>

<script>
import AdminLink from "../../components/AdminLink.vue";
import axios from "axios";

export default {
  components: {AdminLink},
  data() {
    return {
      isRoot: null,
    };
  },
  beforeMount() {
    let that = this;
    axios.get(`${import.meta.env.VITE_API_URL}/iAmRoot`).then(function (res) {
      that.isRoot = res.data;
    });
  },
};
</script>
