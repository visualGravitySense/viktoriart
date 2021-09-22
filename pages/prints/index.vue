<template>
  <div class="blog-page-wrapper">

    <Header />

    <OffCanvasMobileMenu />

<!--    CHALLENGES    -->
    <PageTitle title="Prints" breadcrumbTitle="Prints" />

    <Prints :products="products"/>

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
    Prints: () => import('@/components/Prints/Prints'),
    ContactDevider: () => import('@/components/ContactDevider'),
    Footer: () => import('@/components/Footer'),
  },

  head() {
    return {
      title: 'Prints'
    }
  },

  async asyncData (context) {
    let [products] = await Promise.all([
      axios.get(`http://localhost:1337/prints/`)

    ])
    return {
      products: products.data
    }
  }
};
</script>


