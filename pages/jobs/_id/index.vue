<template>
  <div class="portfolio-details-page-wrapper">

    <Header />

    <PageTitle title="Job Offer" breadcrumbTitle="Job" />

    <job :post="post"/>


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
    job: () => import('@/components/Job'),
    ContactDevider: () => import('@/components/ContactDevider'),
    Footer: () => import('@/components/Footer'),
    // newComment: () => import('@/components/NewComment'),
    // comments: () => import('@/components/Comments'),
  },

  async asyncData (context) {
    let [post] = await Promise.all([
      axios.get(`http://localhost:1337/jobs/${context.params.id}`)
    ])
    return {
      post: post.data
    }
  }
}




</script>

<style scoped>

</style>
