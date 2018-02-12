<template>
  <div>
    <section class="container">
      <div class="content">
        <h1>Work</h1>
        <post-list v-if="posts" :posts="posts" type="work" title="Recent Posts"></post-list>
      </div>
    </section>
  </div>
</template>

<script>

// import { mapGetters } from 'vuex'
import api from "../../promises/index";
import postList from '../../components/postList.vue';

export default {
  components: { postList },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let data = await api.getPosts('work');
    return {
      posts: data
    }
  },
  head() {
    return {
      title: `Nuxt WordPress | Home`,
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.'
        }
      ]
    }
  },
  data() {
    return {
      title: 'default'
    }
  }
}
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: bold;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
  font-size: 52px;
  padding:50px 5px 0px 5px;
  text-align:center;
}
</style>
