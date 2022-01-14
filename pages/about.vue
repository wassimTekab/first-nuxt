<template>
  <div>
    <h1>About DadJokes</h1>
    <p>This is an app that displays corny dad jokes</p>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  layout: "custom",
  asyncData() {
    // only in pages => return title before load of component
    return {
      title: "About",
    };
  },
  head() {
    return {
      title: "About The App",
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

<style></style>
