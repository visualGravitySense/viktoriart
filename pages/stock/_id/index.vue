<template>
  <div className="blog-page-wrapper">

    <Header/>

    <OffCanvasMobileMenu/>

    <PageTitle :title="blog.name" breadcrumbTitle="Classes"  />

    <CourseDetailsWrapper1  :blog="blog"/>

    <ContactDevider/>

    <Footer/>

    <client-only>
      <back-to-top className="scroll-top" bottom="30px">
        <i className="arrow-top icofont-rounded-up"></i>
        <i className="arrow-bottom icofont-rounded-up"></i>
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
    CourseDetailsWrapper1: () => import('@/components/CourseDetailsWrapper1'),
    ContactDevider: () => import('@/components/ContactDevider'),
    Footer: () => import('@/components/Footer'),
  },

  // data () {
  //     return {
  //       blog: {
  //         id: 1,
  //         name: "Test Name 2"
  //       }
  //     }
  //   },


  async asyncData (context) {
    let [blog] = await Promise.all([
      axios.get(`http://localhost:1337/articles/${context.params.id}`)
    ])
    return {
      blog: blog.data
    }
  },

  head() {
    return {
      title: 'Class'
    }
  },
};
</script>


