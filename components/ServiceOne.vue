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
                        icon: "/images/icons/as1.png",
                        title: "Graphics & Design",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/as6.png",
                        title: "Music & Audio",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/as4.png",
                        title: "Programming & Tech",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/as2.png",
                        title: "Digital Marketing",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/as5.png",
                        title: "Business",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/as3.png",
                        title: "Writing & Translation",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                ]
            }
        },
    };
</script>
