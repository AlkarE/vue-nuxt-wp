<template>
  <div>
    <section class="container">
      <div class="content">
        <div v-if="page.id">
          <h1>{{page.title.rendered}}</h1>
          <div class="inner-content" v-html="page.content.rendered"></div>
        </div>
        <div v-if="page.statusCode">
          <pre>{{page}}</pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import promise from '~/promises';

export default{
  async asyncData({params}){
    let data = await promise.getSingle('posts', params.slug);
    console.log(data);
    if(data[0]){
      return{
        page: data[0]
      }
    }else{
      return{
        page: data
      }
    }
  },
  data(){
    return{
      title: 'default'
    }
  }
}
</script>