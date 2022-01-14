<template>
  <div class="container">
    <h1>{{ error.statusCode }} Page not Found</h1>
  </div>
</template>

<script>
export default {
  layout: "error-layout",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
