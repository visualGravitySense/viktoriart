<template>
  <div class="portfolio-details-page-wrapper">

    <Header />

    <OffCanvasMobileMenu />

    <PageTitle title="Market Statics & Analysis" breadcrumbTitle="Project Details" />

    <Job :post="post" />

    <ContactDevider />

    <Footer />

    <client-only>
      <back-to-top class="scroll-top" bottom="30px">
        <i class="arrow-top icofont-rounded-up"></i>
        <i class="arrow-bottom icofont-rounded-up"></i>
      </back-to-top>
    </client-only>

  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
    Header: () => import('@/components/Header'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    PageTitle: () => import('@/components/PageTitle'),
    Job: () => import('@/components/Job'),
    ContactDevider: () => import('@/components/ContactDevider'),
    Footer: () => import('@/components/Footer'),
  },

  head() {
    return {
      title: 'Project Details'
    }
  },

  async asyncData (context) {
    let [post] = await Promise.all([
      axios.get(`http://localhost:1337/jobs/${context.params.id}`)
    ])
    return {
      post: post.data
    }
  }

};
</script>


