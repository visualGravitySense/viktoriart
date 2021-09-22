<template>
    <div class="widget" data-aos="fade-up" data-aos-duration="1200">
        <h3 class="widget-title">Social media.</h3>
        <div class="separator-line">
            <img class="me-1" src="/images/shape/line-s2.png" alt="Image-HasTech">
            <img src="/images/shape/line-s1.png" alt="Image-HasTech">
        </div>
        <div class="widget-social">
            <div class="social-item" v-for="(social, index) in socialList" :key="index">
                <a :href="social.url">
                    <div class="icon">
                        <i :class="social.iconName"></i>
                    </div>
                    <span>{{ social.title }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                socialList: [
                    {
                        iconName: "icofont-facebook",
                        title: "Facebook",
                        url: ""
                    },
                    {
                        iconName: "icofont-pinterest",
                        title: "Pinterest",
                        url: ""
                    },
                    {
                        iconName: "icofont-instagram",
                        title: "Instagram",
                        url: ""
                    },
                    // {
                    //   iconName: "icofont-facebook",
                    //   title: "Facebook",
                    //   url: "#"
                    // },
                    // {
                    //   iconName: "icofont-pinterest",
                    //   title: "Pinterest",
                    //   url: "#"
                    // },
                    // {
                    //   iconName: "icofont-instagram",
                    //   title: "Instagram",
                    //   url: "#"
                    // }
                ]
            }
        },
    };
</script>
