<template>
  <section class="blog-grid-area">
    <div class="container">

      <div class="row">

        <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="title">Jobs on  <span class="bottom-style">Kangelane</span> Coming Soon</h2>
          <div class="desc">
            <p class="mt-20" >On Kangelane, you can find your business needs and be
              <u class="text-theme-color2">a part of creative community in Estonia.</u>
              You get access to exclusive content, classes, community, and insight into creative process of creators.</p>
          </div>
        </div>


<!--        JOBS WRAPPER CONTENT-->

<!--        <div class="col-12">-->
<!--          <div class="blog-content-column">-->
<!--            <div class="blog-content-area post-items-style2">-->

<!--              <filterWorks />-->

<!--              &lt;!&ndash;== Start Blog Post Item ==&ndash;&gt;-->

<!--                <div class="post-item" v-for="blog in blogs" :key="blog.id"-->
<!--                :blog="blog">-->
<!--                  <div class="thumb">-->
<!--                    &lt;!&ndash;                    <nuxt-link :to="getLink">&ndash;&gt;-->
<!--                    &lt;!&ndash;                      <img :src="blog.imgSrc" :alt="blog.title">&ndash;&gt;-->
<!--                    <div  v-if="blog.imgSrc !== null">-->
<!--                      <img :src="`http://localhost:1337${blog.imgSrc.url}`" :alt="blog.title">-->
<!--                    </div>-->
<!--                    &lt;!&ndash;                    </nuxt-link>&ndash;&gt;-->
<!--                  </div>-->
<!--                  <div class="content">-->
<!--                    <div class="meta">-->
<!--                      <n-link to="" class="post-date">{{ blog.created_at }}</n-link>-->
<!--                      &lt;!&ndash;<n-link to="" class="post-date">{{ blog.created_at }}</n-link>&ndash;&gt;-->
<!--                      <n-link to="" class="post-comment"><i class="icofont-speech-comments"></i>{{ blog.category }}</n-link>-->
<!--                      <n-link to="" class="post-like"><i class="icofont-heart"></i>{{ blog.updated_at }}</n-link>-->
<!--                      <n-link to="" class="post-author"><i class="icofont-user-alt-7"></i>{{ blog.author }}</n-link>-->
<!--                    </div>-->
<!--                    <h4 class="title">-->
<!--                      <nuxt-link :to="/jobs/+blog.id">{{ blog.title }}</nuxt-link>-->
<!--                    </h4>-->
<!--                    <div class="separator-line">-->
<!--                      <img class="me-1" src="/images/shape/line-s2.png" alt="shape">-->
<!--                      <img src="/images/shape/line-s1.png" alt="shape">-->
<!--                    </div>-->
<!--                    <p>{{ blog.excerpt }}</p>-->
<!--                    <n-link :to="/jobs/+blog.id" class="btn btn-theme btn-border btn-gray">Read More <i class="icon icofont-long-arrow-right"></i></n-link>-->
<!--                  </div>-->

<!--              &lt;!&ndash;== End Blog Post Item ==&ndash;&gt;-->
<!--               </div>-->

<!--              &lt;!&ndash;<Pagination />&ndash;&gt;-->
<!--              <div class="pagination-area text-center pt-0 pb-70" data-aos="fade-up" data-aos-duration="1000">-->
<!--                <nav>-->
<!--                  <ul class="page-numbers">-->
<!--                    <li>-->
<!--                      &lt;!&ndash;<a class="page-number next" href="#">&ndash;&gt;-->
<!--                      <a class="page-number next" @click="prevPage">-->
<!--                        <i class="icofont-double-left"></i>-->
<!--                      </a>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      <a class="page-number next" @click="nextPage">-->
<!--                        <i class="icofont-double-right"></i>-->
<!--                      </a>-->
<!--                    </li>-->

<!--                    <li>-->
<!--                      <a class="page-number next" @click="debugPrint">-->
<!--                        <p>Debug</p>-->
<!--                      </a>-->
<!--                    </li>-->

<!--                    <li>-->
<!--                      <a class="page-number next" @click="getContent">-->
<!--                        <p>Get</p>-->
<!--                      </a>-->
<!--                    </li>-->

<!--                  </ul>-->
<!--                </nav>-->
<!--              </div>-->

<!--            </div>-->

<!--            <div class="sidebar-area">-->
<!--              <WidgetSearch />-->

<!--              <ServiceCategoryWidget />-->

<!--              <WidgetVideo />-->

<!--              <WidgetSocial />-->

<!--              <WidgetRecentPost />-->

<!--              <WidgetTags />-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->

      </div>
    </div>



  </section>



</template>

<script>
import axios from 'axios'
export default {
  components: {
    Pagination: () => import('@/components/Pagination'),
    FilterWorks: () => import('@/components/FilterWorks'),
    WidgetSearch: () => import('@/components/WidgetSearch'),
    ServiceCategoryWidget: () => import('@/components/ServiceCategoryWidget'),
    WidgetVideo: () => import('@/components/WidgetVideo'),
    WidgetSocial: () => import('@/components/WidgetSocial'),
    WidgetRecentPost: () => import('@/components/WidgetRecentPost'),
    WidgetTags: () => import('@/components/WidgetTags'),
    JobsPreview: () => import('@/components/Jobs/JobsPreview'),
  },

  // data () {
  //   return {
  //     blogs: []
  //   }
  // },

  // created () {
  //   axios
  //       .get('http://localhost:1337/jobs')
  //         .then(response => {
  //           console.log(response.data)
  //           this.blogs = response.data
  //         })
  //     .catch(error => {
  //       console.log(error)
  //     })
    // this.blogs = [
    //   { id: 1, title: 'Blo Test Name 1', excerpt: 22, category: 'male', imgSrc: null },
    //   { id: 2, title: 'Blo Test Name 3', excerpt: 23, category: 'male', imgSrc: null },
    // ]
  // },

  // methods: {
  //   debugPrint() {
  //     console.log(this.blogs)
  //   },
  //   getContent() {
  //     console.log(this.blogs)
  //   },
  // },

  // computed: {
  //   blogs() {
  //     return this.$store.getters.getPostsLoaded
  //   },
    // getLink () {
    //   return this.admin ? `/admin/${this.blog.id}` : `/blog/${this.blog.id}`
    // }
  // },

  // mounted () {
  //   this.$nextTick(() => {
  //     const containerEl = document.querySelector('.box')
  //     this.mixer = new this.mixitup(containerEl)
  //   })
  // },

}
</script>

<style>
.blog-grid-area {
  padding: 150px;
}
</style>


