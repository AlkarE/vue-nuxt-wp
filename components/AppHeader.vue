<template>
	<div id="header" class="header header-fixed-top">
		<div class="logo">
			<nuxt-link to="/"><span>Logo</span></nuxt-link>
		</div>
		<div class="header-right">
			<nav class="menu">
				<ul class="main-menu">
					<h1 v-if="!menu">Menu laden</h1>
					<li v-for="item in menu" v-bind:key="item.id">
						<nuxt-link :to="rewriteSlug(item.object_slug)">{{item.title}}</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import promise from "~/promises/index";

export default {
  data(){
    return{
      title: 'default'
    }
  },
  methods: {
  	rewriteSlug(slug){
  		return `/${slug}`;
  	}
  },
  mounted() {
    this.$store.dispatch('getMainMenu')
  },
  computed: {
    ...mapGetters([
      'menu',
    ])
  }
}
</script>

<style lang="scss">
	#header{
		background-color:green;
		width:100%;
	}
	.header-fixed-top{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		
		display: -webkit-box;
	  display: -moz-box;
	  display: -ms-flexbox;
	  display: -webkit-flex;
	  display: flex;
	  justify-content: space-between;
		.logo{
			padding:15px;
			display: block;
		}
		.header-right{
			margin-left: auto;
		}
	}
	
	nav.menu{
		ul{
			list-style:none;
			display: -webkit-box;
		  display: -moz-box;
		  display: -ms-flexbox;
		  display: -webkit-flex;
		  display: flex;
		  -webkit-flex-flow: row wrap;
		  li{
		  	a{
		  		padding:15px;
		  		display: block;
		  		color:#FFF;
		  		text-decoration:none;
		  		&.nuxt-link-active{
			  		text-decoration:underline;
			  	}
		  	}
		  }
		}
	}
</style>