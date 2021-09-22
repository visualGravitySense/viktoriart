<template>
    <section class="service-area service-default-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-6 m-auto">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="title">Kangelane It's easy, start now</h2>
                        <div class="separator-line mt-14">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="Images">
                            <img src="/images/shape/line-s1.png" alt="Images">
                        </div>
                        <div class="desc">
                            <p class="mt-21">Kangelane is the easy way to find & showcase creative work and home for the marketers, creators, and developers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row icon-box-style1">
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1100" v-for="(service, index) in services" :key="index">
                    <ServiceItem :service="service" />
                </div>
            </div>
        </div>
        <div class="layer-shape">
            <img class="layer-shape-one" src="/images/shape/6.png" alt="shape">
            <img class="layer-shape-two" src="/images/shape/7.png" alt="shape">
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        icon: "/images/icons/s1.png",
                        title: "Web Development",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s2.png",
                        title: "Market Analysis",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s3.png",
                        title: "Brand Identity",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s4.png",
                        title: "Business Consultation",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s5.png",
                        title: "SEO Marketing",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s6.png",
                        title: "UX & UI Design",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                ]
            }
        },
    };
</script>
