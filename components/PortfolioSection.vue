<template>
    <section class="portfolio-area portfolio-default-area">
        <div class="container pb-sm-50 pb-xl-70 pb-120">
            <div class="row align-items-center" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-sm-8">
                    <div class="section-title xs-text-center">
                        <div class="subtitle-content xs-d-i-flex">
                            <img src="/images/shape/line1.png" alt="Virtuf-HasTech">
                            <h5>Portfolio</h5>
                        </div>
                        <h2 class="title">We Have Leadership Strong Experience In <span>Business.</span></h2>
                    </div>
                </div>
                <div class="col-sm-4 text-right">
                    <n-link to="/project" class="btn btn-theme btn-border btn-theme-color2 xs-d-none">All Projects <i class="icon icofont-long-arrow-right"></i></n-link>
                </div>
            </div>
        </div>
        <div class="container custom-container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="portfolio-slider-content" data-aos="fade-up" data-aos-duration="1000">
                        <div class="swiper-container portfolio-slider-container">
                            <swiper :options="portfolioSliderContainer">

                              <div class="swiper-slide portfolio-item">
                                    <div class="inner-content">
                                        <div class="thumb" :style="{ backgroundImage: `url('/images/portfolio/s2.jpg')` }">
                                            <n-link to="/portfolio-details"></n-link>
                                        </div>
                                        <div class="portfolio-info">
                                            <div class="content">
                                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                                                <h3 class="title">
                                                    <n-link to="/portfolio-details">IOT FPS game add-on</n-link>
                                                </h3>
                                                <n-link to="/portfolio-details" class="category">Product / Development</n-link>
                                            </div>
                                            <n-link to="/portfolio-details" class="btn btn-theme btn-border btn-portfolio">View Details <i class="icon icofont-long-arrow-right"></i></n-link>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide portfolio-item">
                                    <div class="inner-content">
                                        <div class="thumb" :style="{ backgroundImage: `url('/images/portfolio/s3.jpg')` }">
                                            <n-link to="/portfolio-details"></n-link>
                                        </div>
                                        <div class="portfolio-info">
                                            <div class="content">
                                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                                                <h3 class="title">
                                                    <n-link to="/portfolio-details">Branding: Logo Design.</n-link>
                                                </h3>
                                                <n-link to="/portfolio-details" class="category">Graphic Design / Marketing</n-link>
                                            </div>
                                            <n-link to="/portfolio-details" class="btn btn-theme btn-border btn-portfolio">View Details <i class="icon icofont-long-arrow-right"></i></n-link>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide portfolio-item">
                                    <div class="inner-content">
                                        <div class="thumb" :style="{ backgroundImage: `url('/images/portfolio/s1.jpg')` }">
                                            <n-link to="/portfolio-details"></n-link>
                                        </div>
                                        <div class="portfolio-info">
                                            <div class="content">
                                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                                                <h3 class="title">
                                                    <n-link to="/portfolio-details">Content Marketing: Nutikas Kodu</n-link>
                                                </h3>
                                                <n-link to="/portfolio-details" class="category">Content / Marketing</n-link>
                                            </div>
                                            <n-link to="/portfolio-details" class="btn btn-theme btn-border btn-portfolio">View Details <i class="icon icofont-long-arrow-right"></i></n-link>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide portfolio-item">
                                  <div class="inner-content">
                                    <div class="thumb" :style="{ backgroundImage: `url('/images/portfolio/s4.jpg')` }">
                                      <n-link to="/portfolio-details"></n-link>
                                    </div>
                                    <div class="portfolio-info">
                                      <div class="content">
                                        <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                                        <h3 class="title">
                                          <n-link to="/portfolio-details">Branding: Logo Design</n-link>
                                        </h3>
                                        <n-link to="/portfolio-details" class="category">Graphic  / Marketing</n-link>
                                      </div>
                                      <n-link to="/portfolio-details" class="btn btn-theme btn-border btn-portfolio">View Details <i class="icon icofont-long-arrow-right"></i></n-link>
                                    </div>
                                  </div>
                                </div>

                                <div class="swiper-slide portfolio-item">
                                  <div class="inner-content">
                                    <div class="thumb" :style="{ backgroundImage: `url('/images/portfolio/s5.jpg')` }">
                                      <n-link to="/portfolio-details"></n-link>
                                    </div>
                                    <div class="portfolio-info">
                                      <div class="content">
                                        <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                                        <h3 class="title">
                                          <n-link to="/portfolio-details">Graphic Design: Product Mockup</n-link>
                                        </h3>
                                        <n-link to="/portfolio-details" class="category">Graphic  / Marketing</n-link>
                                      </div>
                                      <n-link to="/portfolio-details" class="btn btn-theme btn-border btn-portfolio">View Details <i class="icon icofont-long-arrow-right"></i></n-link>
                                    </div>
                                  </div>
                                </div>


                            </swiper>
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
                portfolioSliderContainer: {
                    speed: 1500,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    loop: true,
                    spaceBetween : 30,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        1800:{
                            slidesPerView: 'auto',
                            spaceBetween : 50
                        },
                        1400:{
                            slidesPerView: 3,
                            slidesPerGroup : 1,
                            spaceBetween : 30
                        },

                        992:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2,
                            centeredSlides: false
                        },

                        0:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>
