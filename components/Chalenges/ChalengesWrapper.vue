<template>
    <section class="blog-grid-area">
        <div class="container">
            <div class="row">

              <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                <h2 class="title">Prints on  <span class="bottom-style">Kangelane</span></h2>
                <div class="desc">
                  <p class="mt-20" >On Kangelane, you can find your business needs and be
                    <u class="text-theme-color2">a part of creative community in Estonia.</u>
                    You get access to exclusive content, classes, community, and insight into creative process of creators.</p>
                </div>
              </div>

                <div class="col-12">
<!--                    <div class="blog-content-column">-->
                        <div class="blog-content-area post-items-style2">
                            <!--== Start Blog Post Item ==-->
                            <div class="post-item" data-aos="fade-up" data-aos-duration="1000" v-for="(blog, index) in blogs" :key="index">
                                <div class="thumb">

                                  <div  v-if="blog.imgSrc !== null">
                                    <img :src="blog.imgSrc" :alt="blog.title">
                                  </div>

                                </div>
                                <div class="content">
                                    <div class="meta">
                                        <n-link to="" class="post-date">{{ blog.date }}</n-link>
                                        <n-link to="" class="post-comment"><i class="icofont-speech-comments"></i>{{ blog.comment }}</n-link>
                                        <n-link to="" class="post-like"><i class="icofont-heart"></i>{{ blog.like }}</n-link>
                                        <n-link to="" class="post-author"><i class="icofont-user-alt-7"></i>{{ blog.author }}</n-link>
                                    </div>

                                    <h4 class="title">
                                      <nuxt-link :to="blog.link">{{ blog.title }}</nuxt-link>

                                    </h4>

                                    <div class="separator-line">
                                        <img class="me-1" src="/images/shape/line-s2.png" alt="shape">
                                        <img src="/images/shape/line-s1.png" alt="shape">
                                    </div>
                                    <p>{{ blog.excerpt }}</p>
                                    <a href="mailto:kangelaneshop@deepfatsnail.eu" class="btn btn-theme btn-border btn-gray">Buy item <i class="icon icofont-long-arrow-right"></i></a>
                                </div>
                            </div>
                            <!--== End Blog Post Item ==-->

<!--                            <Pagination />-->
                        </div>

<!--                        <div class="sidebar-area">-->

                          <!--<WidgetTags />-->

<!--                            <FilterTags />-->

                            <!--<WidgetSearch />-->

<!--                            <ServiceCategoryWidget />-->

                            <!--<WidgetVideo />-->

<!--                            <WidgetSocial />-->

                            <!--<WidgetRecentPost />-->


<!--                        </div>-->

<!--                    </div>-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            Pagination: () => import('@/components/Pagination'),
            WidgetSearch: () => import('@/components/WidgetSearch'),
            ServiceCategoryWidget: () => import('@/components/ServiceCategoryWidget'),
            WidgetVideo: () => import('@/components/WidgetVideo'),
            WidgetSocial: () => import('@/components/WidgetSocial'),
            WidgetRecentPost: () => import('@/components/WidgetRecentPost'),
            WidgetTags: () => import('@/components/WidgetTags'),
        },

        // computed: {
        //   blogs() {
        //     return this.$store.getters.getPostsLoaded
        //   },

          // getLink () {
          //   return this.admin ? `/admin/${this.blog.id}` : `/blog/${this.blog.id}`
          // }

        // },

        data() {
            return {
                blogs: [
                    {
                        imgSrc: "/images/blog/b1.jpg",
                        link: "",
                        title: "Pink ultra composition",
                        excerpt: "You can by this print by placing an order by email",
                        date: "13 July, 2021",
                        comment: 0,
                        like: 0,
                        author: "Lroosileht",
                        category: "tshirt"
                    },
                    {
                        imgSrc: "/images/blog/b2.jpg",
                        link: "",
                        title: "Precious",
                        excerpt: "You can by this print by placing an order by email.",
                        date: "13 July, 2021",
                        comment: 0,
                        like: 0,
                        author: "Inna Tyurikova",
                        category: "frame"
                    },
                    {
                        imgSrc: "/images/blog/b3.jpg",
                        link: "",
                        title: "Cyber Punk Art: Viktor Tsoi",
                        excerpt: "You can by this print by placing an order by email.",
                        date: "13 July, 2021",
                        comment: 0,
                        like: 0,
                        author: "Kangelane",
                        category: "hoody"
                    },
                    {
                        imgSrc: "/images/blog/b4.jpg",
                        link: "",
                        title: "Hero Event Poster",
                        excerpt: "You can by this print by placing an order by email.",
                        date: "13 July, 2021",
                        comment: 0,
                        like: 0,
                        author: "Kangelane",
                        category: "Electronics/Gadget"
                    },
                ]
            }
        },
    };
</script>
