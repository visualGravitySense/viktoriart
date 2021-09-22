<template>
    <section class="testimonial-area testimonial-default-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-xl-5 md-text-center">
                    <div class="shape-layer tilt-animation" data-aos="fade-up" data-aos-duration="1100">
                        <img src="/images/testimonial/1.jpg" alt="Virtuf-HasTech">
                    </div>
                </div>
                <div class="col-lg-7 col-xl-7">
                    <div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000">
                        <div class="subtitle-content xs-d-i-flex">
<!--                            <img src="/images/shape/line1.png" alt="Virtuf-HasTech">-->
                            <h5>Testimonial</h5>
                        </div>
                        <h2 class="title">Happy Clients. They Are Think <span>About Us.</span></h2>
                        <div class="separator-line">
<!--                            <img src="/images/shape/line1.png" alt="Virtuf-HasTech">-->
<!--                            <img src="/images/shape/line2.png" alt="Virtuf-HasTech">-->
                        </div>
                    </div>
                    <div class="testimonial-content md-pl-0 pl-lg-30 pl-70" data-aos="fade-up" data-aos-duration="1100">
                        <div class="testimonial-slider-content position-relative">
                            <div class="testimonial-slider-container">
                                <swiper :options="testimonialSlider">
                                    <div class="swiper-slide testimonial-single" v-for="(testimonial, index) in testimonials" :key="index">
                                        <div class="client-content">
                                            <p>{{ testimonial.desc }}</p>
                                            <img class="quote-icon" src="/images/icons/quote-icon.png" alt="Icon">
                                        </div>
                                        <div class="client-info">
<!--                                            <img class="shape-line-img" src="/images/shape/line1.png" alt="Virtuf-HasTech">-->
                                            <h4 class="name">{{ testimonial.name }}</h4>
                                            <h6 class="designation">{{ testimonial.designation }}</h6>
                                        </div>
                                        <div class="icon-box">
                                            <img :src="testimonial.imgSrc" :alt="testimonial.name">
                                        </div>
                                    </div>
                                </swiper>
                                <!-- Add Arrows -->
                                <div class="swiper-button-next"><i class="icofont-long-arrow-up"></i></div>
                                <div class="swiper-button-prev"><i class="icofont-long-arrow-down"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                testimonialSlider: {
                    speed: 1500,
                    slidesPerView : 1,
                    loop: true,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.testimonial-slider-container .swiper-button-next',
                        prevEl: '.testimonial-slider-container .swiper-button-prev',
                    }
                },

                testimonials: [
                    {
                        name: "Anna Curly",
                        designation: "Artist",
                        imgSrc: "/images/icons/tt1.png",
                        desc: "Great designers and web developers team who building a beautiful websites. I ordered three years ago and the site still looks very modern and stylish. Thank you very much!"
                    },
                    {
                        name: "Nikolai Nedvedski",
                        designation: "Chief of a construction company",
                        imgSrc: "/images/icons/tt2.png",
                        desc: "The guys from this company immediately impressed me with their interesting vision and unusual approach to work. I try to solve all issues related to digital media or advertising through them whenever possible."
                    }
                ]
            }
        },
    };
</script>
