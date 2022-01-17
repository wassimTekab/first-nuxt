<template>
  <div>
    <h1>Blog index</h1>
    <div v-if="posts">
      <!-- <Post v-for="post in posts" :key="post.id" :post="post" /> -->
      <Post v-for="post in $store.state.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "../../components/Post.vue";
export default {
  components: { Post },
  data() {
    return {
      posts: [],
    };
  },
  //SSR with async data
  // update state of the component (data)
  // asyncData({ $axios }) {
  //   console.log($axios);
  //   return axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       return {
  //         posts: res.data,
  //       };
  //     });
  // },
  // SSR with fetch
  // update state in the store
  fetch({ $axios, store }) {
    // console.log($axios);
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log("store",store)
        store.commit("updatePosts", res.data);
        // console.log(res)
      }).catch(err => console.error(err));
  },
  // async created() {
  //   const config = {²
  //     headers: {
  //       Accept: "application/json"
  //     }
  //   };

  //   try {
  //     const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts",config);

  //     this.posts = data;
  //     console.log(this.posts)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};
</script>

<style></style>
