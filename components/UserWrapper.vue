<template>
    <section class="service-area">
        <div class="container">
            <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
              <h2 class="title">Select a membership level</h2>
              <div class="separator-line mt-14">
                <img class="me-1" src="/images/shape/line-s2.png" alt="Images">
                <img src="/images/shape/line-s1.png" alt="Images">
              </div>
              <div class="desc">
                <p class="mt-21">Support this artist with your monthly contribution</p>
              </div>
            </div>
            <div class="row icon-box-style1">
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1100" v-for="(service, index) in services" :key="index">
                    <ServiceItem :service="service" />
                </div>
            </div>





        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        icon: "/images/icons/ss1.png",
                        title: "5$",
                        desc: "Kangelane who contribute at this level get my thanks and access to recipes and flash fiction."
                    },
                    {
                        icon: "/images/icons/ss2.png",
                        title: "10$",
                        desc: "Kangelane who contribute at this level get my thanks and access to recipes and flash fiction."
                    },
                    {
                        icon: "/images/icons/ss3.png",
                        title: "15$",
                        desc: "Kangelane who contribute at this level get my thanks and access to recipes and flash fiction."
                    },
                    {
                        icon: "/images/icons/ss1.png",
                        title: "20$",
                        desc: "Kangelane who contribute at this level get my thanks and access to recipes and flash fiction."
                    },
                    {
                        icon: "/images/icons/ss2.png",
                        title: "25$",
                        desc: "Kangelane who contribute at this level get my thanks and access to recipes and flash fiction."
                    },
                    {
                        icon: "/images/icons/ss3.png",
                        title: "30$",
                        desc: "Kangelane who contribute at this level get my thanks and access to recipes and flash fiction."
                    },
                ]
            }
        },
    };
</script>
