<template>
  <div>
    <!-- @click.native => prevent default event of nuxt-link -->
    <nuxt-link :to="'/blog/post/' + post.id">
      <div class="post" @click="updateSelectedPost(post)">
        <p>{{ post.title }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post", "id"],

  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost", post);
    },
  },
};
</script>

<style>
.post {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
