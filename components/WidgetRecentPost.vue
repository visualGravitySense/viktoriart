<template>
    <div class="widget" data-aos="fade-up" data-aos-duration="1000">
        <h3 class="widget-title">Recent Post</h3>
        <div class="separator-line">
            <img class="me-1" src="/images/shape/line-s2.png" alt="image">
            <img src="/images/shape/line-s1.png" alt="image">
        </div>
        <div class="widget-blog-post">
            <ul>
                <li class="recent-post-item" v-for="(post, index) in recentPosts" :key="index">
                    <div class="thumb">
                        <n-link to="/blog-details">
                            <img :src="post.imgSrc" :alt="post.title">
                        </n-link>
                    </div>
                    <div class="content">
                        <n-link to="/blog-details">{{ post.title }}</n-link>
                        <span><i class="icofont-ui-calendar"></i>{{ post.date }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                recentPosts: [
                    {
                        imgSrc: "/images/blog/s1.jpg",
                        title: "Make type specimen book only five.",
                        date: "07 June, 2021"
                    },
                    {
                        imgSrc: "/images/blog/s2.jpg",
                        title: "We work in the fields of UI/UX design",
                        date: "26 July, 2021"
                    },
                    {
                        imgSrc: "/images/blog/s3.jpg",
                        title: "printing industry has been printer.",
                        date: "18 March, 2021"
                    },
                ]
            }
        },
    };
</script>
