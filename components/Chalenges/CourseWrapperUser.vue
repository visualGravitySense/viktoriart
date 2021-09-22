<template>
    <section class="blog-grid-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="blog-content-column">
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
                                    <n-link :to="blog.link" class="btn btn-theme btn-border btn-gray">Read More <i class="icon icofont-long-arrow-right"></i></n-link>
                                </div>
                            </div>
                            <!--== End Blog Post Item ==-->

                            <Pagination />
                        </div>

                        <div class="sidebar-area">

                          <!--<WidgetTags />-->

                            <AboutUser />

                            <!--<WidgetSearch />-->

                            <ServiceCategoryGoals />

                            <!--<WidgetVideo />-->

                            <WidgetSocialUser />

                            <!--<WidgetRecentPost />-->


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import AboutUser from "../AboutUser";
    export default {
        components: {
            AboutUser: () => import('@/components/AboutUser'),
            Pagination: () => import('@/components/Pagination'),
            WidgetSearch: () => import('@/components/WidgetSearch'),
            ServiceCategoryGoals: () => import('@/components/ServiceCategoryGoals'),
            WidgetVideo: () => import('@/components/WidgetVideo'),
            WidgetSocialUser: () => import('@/components/WidgetSocialUser'),
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
                        link: "/course-1",
                        title: "Build your brand: Logo Design",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",
                        date: "21 March, 2021",
                        comment: 2566,
                        like: 750,
                        author: "Alvin Malone",
                        category: "Business/Marketing"
                    },
                    {
                        imgSrc: "/images/blog/b1.jpg",
                        link: "/course-2",
                        title: "Customize your site: WordPress",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",
                        date: "17 June, 2021",
                        comment: 3345,
                        like: 980,
                        author: "Andrew Rechard",
                        category: "Development/Design"
                    },
                    {
                        imgSrc: "/images/blog/b1.jpg",
                        link: "/course-3",
                        title: "Engage your audience: Video Explainer",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",
                        date: "28 May, 2021",
                        comment: 1450,
                        like: 380,
                        author: "Antony Gomes",
                        category: "Fashion/Style"
                    },
                    {
                        imgSrc: "/images/blog/b1.jpg",
                        link: "/course-4",
                        title: "Reach more customers: Social Media Strategy",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",
                        date: "12 August, 2020",
                        comment: 1780,
                        like: 1290,
                        author: "Falguni",
                        category: "Electronics/Gadget"
                    },
                ]
            }
        },
    };
</script>
