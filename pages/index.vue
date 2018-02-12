<template>
  <div>
    <section class="container">
      <div>
        <app-logo/>
        <h1>Home.</h1>
      </div>
      <nuxt-link to="/work">Work</nuxt-link> | <nuxt-link to="/posts">Posts</nuxt-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
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

<style lang="scss">
// .container {
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }

// .subtitle {
//   font-weight: 300;
//   font-size: 42px;
//   color: #526488;
//   word-spacing: 5px;
//   padding-bottom: 15px;
// }

// .links {
//   padding-top: 15px;
// }
</style>
