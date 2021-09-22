<template>
    <section class="service-area">
        <div class="container">
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