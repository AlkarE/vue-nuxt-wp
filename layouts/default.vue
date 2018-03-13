<template>
  <div>
    <app-header />
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  
  data() {
    return {
      title: 'default'
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 16px;
  word-spacing: 1px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.container{
  margin-top: 50px;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

// .slide-enter-active, .slide-leave-active {
//   transition: opacity 20.5s;
// }
// .slide-enter, .slide-leave-to {
//   opacity: 0;
// }

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-enter-active {
  transition: all .3s ease;
}
.slide-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/*.page-enter,
.page-leave-to { opacity: 0 }

.page-leave,
.page-enter-to { opacity: 1 }

.page-enter-active,
.page-leave-active { transition: opacity 10000ms }*/

// .page-enter { transform: translateX(100%) }
// .page-enter-to { transform: translateX(0) }
// .page-enter-active { position: absolute; width:100%;}

// .page-leave { transform: translateX(0) }
// .page-leave-to { transform: translateX(-100%) }

// .page-enter-active,
// .page-leave-active { transition: all 750ms ease-in-out }

</style>
