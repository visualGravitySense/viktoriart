<!--
Razrabotka vseh logotipov: v raznyx dizajnax formatah
1. FIREPROOF!
2. Anna Curly / BUBA WEB
3. VIKA KOLTSOVA / INNA TSIsxs : Portfolio na KANGELANE
4. Sajt MASIN6: KOLESA POKR6SKI : NAJTI POSTAVÍIKOV / NAJTI PARTNEROV
-->

<template>
    <section class="blog-details-area">
        <div class="container">
            <div class="row">
                <div class="col-12">

<!--                  TESTING THE MARKET CONNECTION WITH STORE-->
<!--                  <products :products="products" />-->
<!--                  <products :products="products" />-->

<!--                    <div class="blog-details-column">-->
                        <div class="post-details-content">
                            <div class="post-details-body">
                                <div class="content" data-aos="fade-up" data-aos-duration="1000">
<!--                                    <h2 class="title"> uild your brand: Logo Design.</h2>-->
                                    <h2 class="title"> {{ blog.name }} </h2>
                                    <div class="separator-line mb-21">
                                        <img class="me-1" src="/images/shape/line-s2.png" alt="shape">
                                        <img src="/images/shape/line-s1.png" alt="shape">
                                    </div>
                                    <div class="meta">
                                        <div class="inner-meta">
                                            <n-link to="" class="post-date">{{ blog.date }}</n-link>
                                            <n-link to="" class="post-comment"><i class="icofont-speech-comments"></i> {{ blog.students }} </n-link>
                                            <n-link to="" class="post-like"><i class="icofont-heart"></i> {{ blog.follow }} </n-link>
                                            <a class="post-author"><i class="icofont-user-alt-7"></i> {{ blog.author }} </a>
                                        </div>
                                    </div>
                                    <p>
                                      {{ blog.intro }}
                                      </p>

                                    <div class="thumb">
                                      <div  v-if="blog.imgTitle !== null">
                                        <img :src="`http://localhost:1337${blog.imgTitle.url}`" :alt="blog.name">
                                      </div>
                                    </div>

                                    <h2 class="title">Description</h2>
                                    <div class="separator-line">
                                        <img class="me-1" src="/images/shape/line-s2.png" alt="shape">
                                        <img src="/images/shape/line-s1.png" alt="shape">
                                    </div>
                                    <p>
                                      {{ blog.description2 }}
                                    </p>


                                    <div class="blockquote-area">
                                        <blockquote class="blockquote-style">
                                            <p> {{ blog.quote }} </p>
                                            <div class="icon">”</div>
                                        </blockquote>
                                    </div>

                                    <p>
                                      {{ blog.description3 }}
                                    </p>



                                    <div class="category-social-content">
                                        <div class="category-items">
                                            <n-link to="">Branding</n-link>
                                            <n-link to="">Marketing</n-link>
                                            <n-link to="">Graphic Design</n-link>
                                        </div>
                                        <div class="social-items">
                                            <a href=""><i class="icofont-facebook"></i></a>
                                            <a href=""><i class="icofont-skype"></i></a>
                                            <a href=""><i class="icofont-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>

<!--                        DO NOT DELETE!!! -->
<!--                              NEXT AND PREVIEWS POST-->
<!--                                <div class="page-navigation" data-aos="fade-up" data-aos-duration="1000">-->
<!--                                    <div class="nav-item prev">-->
<!--                                        <div class="thumb">-->
<!--                                            <img src="/images/portfolio/nav1.jpg" alt="image">-->
<!--                                            <n-link to="/blog-details"><i class="icofont-double-left"></i></n-link>-->
<!--                                        </div>-->
<!--                                        <div class="content">-->
<!--                                            <img class="line-shape" src="/images/shape/line-s1.png" alt="image">-->
<!--                                            <h4>-->
<!--                                                <n-link to="/blog-details">Digital <br>Marketing</n-link>-->
<!--                                            </h4>-->
<!--                                            <n-link to="/blog" class="post-date">07 Jan, 2021</n-link>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="nav-item-center">-->
<!--                                        <n-link to="/blog">-->
<!--                                            <img src="/images/icons/dot.png" alt="image">-->
<!--                                        </n-link>-->
<!--                                    </div>-->
<!--                                    <div class="nav-item next">-->
<!--                                        <div class="thumb">-->
<!--                                            <img src="/images/portfolio/nav2.jpg" alt="image">-->
<!--                                            <n-link to="/blog-details"><i class="icofont-double-right"></i></n-link>-->
<!--                                        </div>-->
<!--                                        <div class="content">-->
<!--                                            <img class="line-shape" src="/images/shape/line-s1.png" alt="image">-->
<!--                                            <h4>-->
<!--                                                <n-link to="/blog-details">Business <br>Consulting</n-link>-->
<!--                                            </h4>-->
<!--                                            <n-link to="/blog-details" class="post-date">07 Jan, 2021</n-link>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->

<!--                                <PostAuthorInfoSv />-->
<!--                                <PostAuthorInfo />-->

                                <div class="author-info" data-aos="fade-up" data-aos-duration="1000">
                                  <div class="thumb">
                                    <img src="/images/blog/author-01.jpg" alt="Image">
                                  </div>
                                  <div class="author-details">
                                    <h4 class="title"> {{ blog.author }} </h4>
                                    <img class="line-shape" src="/images/shape/line-s1.png" alt="image">
                                      <p>
<!--                                        NEED A PIC FROM THE AUTHOR-->
                                      {{ blog.aboutauthor }}
                                      </p>
<!--                                        NEED A SOCIAL MEDIA KINKS FROM THE AUTHOR-->
                                    <div class="social-icons">
                                      <a href="#"><i class="icofont-facebook"></i></a>
                                      <a href="#"><i class="icofont-skype"></i></a>
                                      <a href="#"><i class="icofont-instagram"></i></a>
                                    </div>
                                  </div>
                                </div>

<!--                              COMMENT AREA-->

<!--                                <div class="comment-area">-->
<!--                                    <h2 class="title" data-aos="fade-up" data-aos-duration="1000">Comments <span>(25)</span></h2>-->
<!--                                    <CommentList />-->

<!--                                    <CommentForm />-->

<!--                                </div>-->
                            </div>
                        </div>

<!--                        <div class="sidebar-area">-->
<!--                            <WidgetSearch />-->

<!--                            <ServiceCategoryWidget />-->

<!--                            <WidgetVideo />-->

<!--                            <WidgetSocial />-->

<!--                            <WidgetRecentPost />-->

<!--                            <WidgetTags />-->
<!--                        </div>-->

<!--                    </div>-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
    export default {
        components: {
            PostAuthorInfo: () => import('@/components/PostAuthorInfo'),
            Products: () => import('@/components/Market/Products'),
            CommentList: () => import('@/components/CommentList'),
            CommentForm: () => import('@/components/CommentForm'),
            WidgetSearch: () => import('@/components/WidgetSearch'),
            ServiceCategoryWidget: () => import('@/components/ServiceCategoryWidget'),
            WidgetVideo: () => import('@/components/WidgetVideo'),
            WidgetSocial: () => import('@/components/WidgetSocial'),
            WidgetRecentPost: () => import('@/components/WidgetRecentPost'),
            WidgetTags: () => import('@/components/WidgetTags'),
        },
        name: "Class",

        async asyncData (context) {
          let [blog, products] = await Promise.all([
            axios.get(`http://localhost:1337/articles/${context.params.id}`),
            // axios.get(`http://localhost:1337/articles/`)
          ])
          return {
            blog: blog.data,
            // products: products.data
          }
        },

        // data () {
        //   return {
        //     blog: {
        //       id: 1,
        //       name: "Test Name"
        //     }
        //   }
        // },

        // data() {
        //   return {
        //     mixer: null,
        //
        //     products: [
        //       {
        //         imgSrc: "/images/portfolio/1.jpg",
        //         title: "Management Illustrations",
        //         category: "graphics"
        //       },
        //       {
        //         imgSrc: "/images/portfolio/2.jpg",
        //         title: "Product Mockup",
        //         category: "video"
        //       },
        //       {
        //         imgSrc: "/images/portfolio/3.jpg",
        //         title: "Constructions",
        //         category: "book"
        //       },
        //       {
        //         imgSrc: "/images/portfolio/4.jpg",
        //         title: "Product Page",
        //         category: "template"
        //       },
        //       {
        //         imgSrc: "/images/portfolio/5.jpg",
        //         title: "Interior Design",
        //         category: "models"
        //       },
        //       {
        //         imgSrc: "/images/portfolio/6.jpg",
        //         title: "Digital Marketing Hacks",
        //         category: "book"
        //       },
        //     ]
        //   }
        // },

        props: {
          blog: {
            type: Array,
            required: true
          }
        },

        computed: {
          blogs () {
            return this.$store.getters.getPostsLoaded
          }
        },
    };
</script>
