<template>
  <RouterLink :to="to" class="admin-button-link">
    <div>
      <span :style="{ background: backgroundColor() }" class="color"></span>
      <h2 style="margin-left: 10px">{{ title }}</h2>
      <span style="margin-left: 10px">{{ description }}</span>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    color: String,
    to: String,
  },
  methods: {
    backgroundColor: function () {
      return this.color;
    },
  },
};
</script>
