<template>
  <div class="portfolio-details-page-wrapper">

    <Header />

    <PageTitle :title="post.title" :breadcrumbTitle="post.category" />

    <product :post="post"/>


    <ContactDevider />

    <Footer />

    <!--    <comments :comments="comments" />-->
    <!--    <newComment />-->

  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "jobs_id page",

  components: {
    Header: () => import('@/components/Header'),
    PageTitle: () => import('@/components/PageTitle'),
    Product: () => import('@/components/Product'),
    ContactDevider: () => import('@/components/ContactDevider'),
    Footer: () => import('@/components/Footer'),
    // newComment: () => import('@/components/NewComment'),
    // comments: () => import('@/components/Comments'),
  },

  async asyncData (context) {
    let [post] = await Promise.all([
      axios.get(`http://localhost:1337/markets/${context.params.id}`)
    ])
    return {
      post: post.data
    }
  }
}




</script>

<style scoped>

</style>
