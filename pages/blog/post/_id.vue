<template>
  <div>
    <nuxt-link to="/">Back to home</nuxt-link>
    <hr />
    <!-- <h5>{{ post.title }}</h5>
    <p>{{ post.body }}</p> -->
    <h5 class="title">{{ $store.state.selectedPost.title }}</h5>
    <p class="post-body">{{ $store.state.selectedPost.body }}</p>
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "postDetail",
  data() {
    return {
      post: {},
    };
  },
  validate({ params }) {
    return !isNaN(params.id);
  },
  head(){
      return {
          title:this.$store.state.selectedPost.title,
          meta:[
              {
                  hid:'description',
                  name:'description',
                  content:this.$store.state.selectedPost.body
              }
          ]
      }
  },
  //   async asyncData(context) {
  //     console.log(context);

  //     const id = context.params.id;
  //     try {
  //       //   Using the nuxtjs/http module here exposed via context.app
  //       const { data } = await axios.get(
  //         `https://jsonplaceholder.typicode.com/posts/${id}`
  //       );
  //       console.log(data);

  //     //   return { post: data };
  //     } catch (e) {
  //       context.error(e); // Show the nuxt error page with the thrown error
  //     }
  //   },
  fetch({ store, params }) {
    if (store.state.selectedPost && store.state.selectedPost.id == params.id)
      return true;
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        store.commit("updateSelectedPost", res.data);
      });
  },
};
</script>

<style scoped></style>
