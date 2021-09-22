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
                                    <n-link to="/blog-details">
                                        <img :src="blog.imgSrc" :alt="blog.title">
                                    </n-link>
                                </div>
                                <div class="content">
                                    <div class="meta">
                                        <n-link to="/blog" class="post-date">{{ blog.date }}</n-link>
                                        <n-link to="/blog" class="post-comment"><i class="icofont-speech-comments"></i>{{ blog.comment }}</n-link>
                                        <n-link to="/blog" class="post-like"><i class="icofont-heart"></i>{{ blog.like }}</n-link>
                                        <n-link to="/blog" class="post-author"><i class="icofont-user-alt-7"></i>{{ blog.author }}</n-link>
                                    </div>
                                    <h4 class="title">
                                        <n-link to="/blog-details">{{ blog.title }}</n-link>
                                    </h4>
                                    <div class="separator-line">
                                        <img class="me-1" src="/images/shape/line-s2.png" alt="shape">
                                        <img src="/images/shape/line-s1.png" alt="shape">
                                    </div>
                                    <p>{{ blog.excerpt }}</p>
                                    <n-link to="/blog-details" class="btn btn-theme btn-border btn-gray">Read More <i class="icon icofont-long-arrow-right"></i></n-link>
                                </div>
                            </div>
                            <!--== End Blog Post Item ==-->

                            <Pagination />
                        </div>

                        <div class="sidebar-area">
                            <WidgetSearch />

                            <ServiceCategoryWidget />

                            <WidgetVideo />

                            <WidgetSocial />

                            <WidgetRecentPost />

                            <WidgetTags />
                        </div>

                    </div>
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

        data() {
            return {
                blogs: [
                    {
                        imgSrc: "/images/blog/b1.jpg",
                        title: "123 123 We work in the fields of UI/UX design and art direction.",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",
                        date: "21 March, 2021",
                        comment: 2566,
                        like: 750,
                        author: "Alvin Malone",
                        category: "Business/Marketing"
                    },
                    {
                        imgSrc: "/images/blog/b2.jpg",
                        title: "printing and type setting industry has been printer.",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",
                        date: "17 June, 2021",
                        comment: 3345,
                        like: 980,
                        author: "Andrew Rechard",
                        category: "Development/Design"
                    },
                    {
                        imgSrc: "/images/blog/b3.jpg",
                        title: "We work in the fields of UI/UX design and art direction.",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry lorem ipsum has industry' standard dummy text ever since the 1500s, whean an unknown printer took galle scrambled it to make a type specimen.",
                        date: "28 May, 2021",
                        comment: 1450,
                        like: 380,
                        author: "Antony Gomes",
                        category: "Fashion/Style"
                    },
                    {
                        imgSrc: "/images/blog/b4.jpg",
                        title: "Printer took galle scrambled it to make a type specimen.",
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
