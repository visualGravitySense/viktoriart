<template>
    <section class="home-slider-area slider-default">
        <div class="home-slider-content">
            <div class="home-slider-container">
                <swiper :options="swiperOptions">

                    <!-- Start Slide Item 1 -->
                    <div class="swiper-slide home-slider-item" :style="{ backgroundImage: `url('/images/slider/bg1.jpg')` }">
                        <div class="slider-content-area">
                            <div class="content">
                                <div class="subtitle-content">
                                    <img src="/images/shape/line2.png" alt="Images">
                                    <h6>Find Classes</h6>
                                </div>
                                <div class="tittle-wrp">
                                    <h2>Unlimited Learning for <span>Creation and Business.</span></h2>

                                </div>
                                <p>Get the skills you need, improve your speciality and take quizzes.</p>
                                <n-link to="/classes" class="btn btn-theme btn-theme-color2">Get started <i class="icon icofont-long-arrow-right"></i></n-link>
                            </div>
                            <div class="layer-style">
                                <div class="thumb">
                                    <img src="/images/slider/1.jpg" alt="Images">
                                </div>
                                <div class="success-rate"><div class="content">100+<span>Hero<br>Classes</span></div></div>
                                <div class="trusted-clients-content">
                                    <span>Popular <br>classes</span>
                                    <ul class="clients-list">
                                        <li><img src="/images/testimonial/clients1.png" alt="Images"></li>
                                        <li><img src="/images/testimonial/clients2.png" alt="Images"></li>
                                        <li><img src="/images/testimonial/clients3.png" alt="Images"></li>
                                        <li><img src="/images/testimonial/clients4.png" alt="Images"> <span>30+</span></li>
                                    </ul>
                                </div>
                                <div class="shape-style1">
                                    <img src="/images/shape/1.png" alt="Images">
                                </div>
                                <div class="shape-style2">
                                    <img src="/images/shape/2.png" alt="Images">
                                </div>
                                <div class="shape-style3">
                                    <img src="/images/shape/3.png" alt="Images">
                                </div>
                                <div class="shape-style4">
                                    <img src="/images/shape/4.png" alt="Images">
                                </div>
                                <div class="shape-style5">
                                    <img src="/images/shape/5.png" alt="Images">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Slide Item -->

                  <!-- Start Slide Item 2 -->
                  <div class="swiper-slide home-slider-item" :style="{ backgroundImage: `url('/images/slider/bg1.jpg')` }">
                    <div class="slider-content-area">
                      <div class="content">
                        <div class="subtitle-content">
                          <img src="/images/shape/line2.png" alt="Images">
                          <h6>For Creators</h6>
                        </div>
                        <div class="tittle-wrp">
                          <h2><span>Digital marketplace</span> for content, art and media.</h2>

                        </div>
                        <p>Support your creative work through a sales on marketplace.</p>
                        <n-link to="/market" class="btn btn-theme btn-theme-color2">Visit marketplace<i class="icon icofont-long-arrow-right"></i></n-link>
                      </div>
                      <div class="layer-style">
                        <div class="thumb">
                          <img src="/images/slider/3.jpg" alt="Images">
                        </div>
                        <div class="success-rate"><div class="content">100%<span>Get Discovered Today</span></div></div>
                        <div class="trusted-clients-content">
                          <span>Popular <br>creators</span>
                          <ul class="clients-list">
                            <li><img src="/images/testimonial/clients1b.png" alt="Images"></li>
                            <li><img src="/images/testimonial/clients2b.png" alt="Images"></li>
                            <li><img src="/images/testimonial/clients3b.png" alt="Images"></li>
                            <li><img src="/images/testimonial/clients4b.png" alt="Images"> <span>230+</span></li>
                          </ul>
                        </div>
                        <div class="shape-style1">
                          <img src="/images/shape/1.png" alt="Images">
                        </div>
                        <div class="shape-style2">
                          <img src="/images/shape/2.png" alt="Images">
                        </div>
                        <div class="shape-style3">
                          <img src="/images/shape/3.png" alt="Images">
                        </div>
                        <div class="shape-style4">
                          <img src="/images/shape/4.png" alt="Images">
                        </div>
                        <div class="shape-style5">
                          <img src="/images/shape/5.png" alt="Images">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Slide Item -->

                    <!-- Start Slide Item 3 -->
                    <div class="swiper-slide home-slider-item" :style="{ backgroundImage: `url('/images/slider/bg1.jpg')` }">
                        <div class="slider-content-area">
                            <div class="content">
                                <div class="subtitle-content">
                                    <img src="/images/shape/line2.png" alt="Images">
                                    <h6>Lifestyle and business</h6>
                                </div>
                                <div class="tittle-wrp">
                                    <h2>The diverse path to <span>Success.</span></h2>
                                </div>
                                <p>Perfect prints for lifestyle and business.</p>
                                <n-link to="/prints" class="btn btn-theme btn-theme-color2">Check Prints<i class="icon icofont-long-arrow-right"></i></n-link>
                            </div>
                            <div class="layer-style">
                                <div class="thumb">
                                    <img src="/images/slider/2.jpg" alt="Images">
                                </div>
                                <div class="success-rate"><div class="content">98% <span>Successful Project</span></div></div>
                                <div class="trusted-clients-content">
                                    <span>New<br>Products</span>
                                    <ul class="clients-list">
                                        <li><img src="/images/testimonial/clients1c.png" alt="Images"></li>
                                        <li><img src="/images/testimonial/clients2c.png" alt="Images"></li>
                                        <li><img src="/images/testimonial/clients3c.png" alt="Images"></li>
                                        <li><img src="/images/testimonial/clients4c.png" alt="Images"> <span>30+</span></li>
                                    </ul>
                                </div>
                                <div class="shape-style1">
                                    <img src="/images/shape/1.png" alt="Images">
                                </div>
                                <div class="shape-style2">
                                    <img src="/images/shape/2.png" alt="Images">
                                </div>
                                <div class="shape-style3">
                                    <img src="/images/shape/3.png" alt="Images">
                                </div>
                                <div class="shape-style4">
                                    <img src="/images/shape/4.png" alt="Images">
                                </div>
                                <div class="shape-style5">
                                    <img src="/images/shape/5.png" alt="Images">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Slide Item -->
                </swiper>
                <!-- Add Arrows -->
                <div class="swiper-button-next">
                    <i class="icofont-rounded-double-right"></i>
                </div>
                <div class="swiper-button-prev">
                    <i class="icofont-rounded-double-left"></i>
                </div>
            </div>
        </div>
        <div class="home-slider-sidebar" data-aos="fade-zoom-in" data-aos-duration="1300">
            <div class="social-icon">
                <a href="https://www.facebook.com/kangelane.on"><i class="icofont-facebook"></i></a>
<!--                <a href="https://www.youtube.com"><i class="icofont-youtube"></i></a>-->
                <a href="https://www.instagram.com/kangelane.on/"><i class="icofont-instagram"></i></a>
                <a href="https://t.me/kangelane_online"><i class="icofont-telegram"></i></a>
<!--                <a href="https://vk.com"><i class="icofont-vk"></i></a>-->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    slidesPerView : 1,
                    loop: true,
                    spaceBetween : 30,
                    autoplay: false,
                    navigation: {
                        nextEl: '.home-slider-container .swiper-button-next',
                        prevEl: '.home-slider-container .swiper-button-prev',
                    }
                }
            }
        },
    };
</script>
