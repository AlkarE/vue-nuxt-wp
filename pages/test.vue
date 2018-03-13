<template>
  <div>
    <section class="container">
      <div class="content">
        Testcomponent<br/>
        {{transition}}
        <button v-on:click="test">Posts!</button>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      transition: 'page',
      title: 'default'
    }
  },
  methods: {
    test() {
      this.transition = 'slide';
      this.$router.push('/posts');
    }
  },

  transition: {
    enterClass:`${this.transition}-enter`,
    enterToClass:`${this.transition}-enter-to`,
    enterActiveClass:`${this.transition}-enter-active`,
    leaveClass:`${this.transition}-enter`,
    leaveToClass:`${this.transition}-enter-to`,
    leaveActiveClass:`${this.transition}-enter-active`,
  }

  // transition: {
  //   beforeEnter(el){
  //     alert('testtest');
  //     console.log(el);
  //     // transition: 'fade'
  //   }
  // }
  // transition: {
  //   name: this.clicked ? 'slide' : 'page'
  // }
}
</script>