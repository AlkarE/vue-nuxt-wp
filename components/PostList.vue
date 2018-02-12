<template>
  <div>
    <div class="post" v-for="post in posts" v-bind:key="post.id">
        <h3><nuxt-link :to="slugToUrl(post.slug)">{{ post.title.rendered }}</nuxt-link></h3>
    </div>
  </div>
</template>

<script>
	export default {
		props: ['posts', 'type'],
	  methods: {
	    slugToUrl(slug) {
	      return `/${this.type}/${slug}`
	    }
	  }
	}
</script>