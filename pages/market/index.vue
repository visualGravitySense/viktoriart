<template>
  <div class="portfolio-page-wrapper">

    <Header />

    <OffCanvasMobileMenu />

    <PageTitleClasses title="Marketplace" breadcrumbTitle="Market" />

    <products :products="products"/>
<!--    <PortfolioWrapperClasses />-->
<!--    <PortfolioWrapperMarket />-->

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
    Products: () => import('@/components/Market/Products'),
    PortfolioWrapperMarket: () => import('@/components/PortfolioWrapperMarket'),
    ContactDevider: () => import('@/components/ContactDevider'),
    Footer: () => import('@/components/Footer'),
  },

  async asyncData (context) {
    let [products] = await Promise.all([
      axios.get(`http://localhost:1337/markets/`)

    ])
    return {
      products: products.data
    }
  },

  head() {
    return {
      title: 'Project'
    }
  },
};
</script>


