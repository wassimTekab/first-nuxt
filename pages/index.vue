<template>
  <div>
    <h2>Welcome to the best corny dad jokes app on the web</h2>
    <h5>{{ date }}</h5>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
export default {
  asyncData() {
    return { date: "Created at: " + new Date() };
  },
  methods: {
    refresh() {
      this.$nuxt.refresh();
    },
  },
  head() {
    return {
      title: "Welcome To Dad Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny dad jokes",
        },
      ],
    };
  },
};
</script>
