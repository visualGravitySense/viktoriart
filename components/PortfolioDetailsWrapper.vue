<template>
    <section class="portfolio-details-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="portfolio-details-content" data-aos="fade-up" data-aos-duration="1000">
                        <div class="portfolio-tab-content">
                            <div class="thumb">
                                <img src="/images/portfolio/tab-b1.jpg" alt="image">
                            </div>
                            <div class="portfolio-info-list">
                                <h4>Information</h4>
                                <div class="separator-line">
                                    <img class="me-1" src="/images/shape/line-s4.png" alt="image">
                                    <img src="/images/shape/line-s4.png" alt="image">
                                </div>
                                <ul class="info-list-style">
                                    <li>
                                        <span>Project</span>
                                        <span>Digital Marketing</span>
                                    </li>
                                    <li>
                                        <span>Clients</span>
                                        <span>Kenneth Glover</span>
                                    </li>
                                    <li>
                                        <span>Budget</span>
                                        <span>$598.75</span>
                                    </li>
                                    <li>
                                        <span>Duration</span>
                                        <span>01 Year & 05 Months</span>
                                    </li>
                                    <li>
                                        <span>Location</span>
                                        <span>95 St, New York, 259 New York, USA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2 class="title">Market Statics & Analysis</h2>
                        <div class="separator-line">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="image">
                            <img src="/images/shape/line-s1.png" alt="image">
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ially unchanged. It was popularised in the 1960s with the release of Letraset sheets an contaning orem Ipsum passages, and more recently with desktop publishing software like pageMaker including versions of Lorem Ipsum.</p>
                        <p class="mb-39">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ially unchanged. It was popularised in the 1960s with the release.</p>
                        <h2 class="title">Running & Protected</h2>
                        <div class="separator-line">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="image">
                            <img src="/images/shape/line-s1.png" alt="image">
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ially unchanged. It was popularised in the 1960s with the release of Letraset sheets an contaning orem Ipsum passages, and more recently with desktop publishing software like pageMaker including versions of Lorem Ipsum.</p>
                        <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ially unchanged. It was popularised in the 1960s with the release.</p>
                        <div class="video-divider">
                            <img src="/images/photos/video1.jpg" alt="image">

                            <CoolLightBox
                                :items="items"
                                :index="index"
                                @close="index = null">
                            </CoolLightBox>
                            <a class="btn-play play-video-popup" href="javascript:void(0)" @click="index = imageIndex" v-for="(image, imageIndex) in items" :key="imageIndex">
                                <span class="icon">
                                    <img src="/images/icons/play.png" alt="image">
                                </span>
                            </a>
                            <span class="video-duration">02 Min Intro Video</span>
                        </div>
                        <h2 class="title">Project Summery</h2>
                        <div class="separator-line">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="image">
                            <img src="/images/shape/line-s1.png" alt="image">
                        </div>
                        <p class="mb-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ially unchanged. It was popularised in the 1960s with the release of Letraset sheets an contaning orem Ipsum passages, and more recently with desktop publishing software like pageMaker including versions of  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ially unchanged. It was popularised in the 1960s with the release.</p>
                        <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div class="category-social-content">
                            <div class="category-items">
                                <n-link to="/project">Business</n-link>
                                <n-link to="/project">Marketing</n-link>
                                <n-link to="/project">Consulting</n-link>
                            </div>
                            <div class="social-items">
                                <a href="#"><i class="icofont-facebook"></i></a>
                                <a href="#"><i class="icofont-skype"></i></a>
                                <a href="#"><i class="icofont-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-navigation" data-aos="fade-up" data-aos-duration="1000">
                        <div class="nav-item prev">
                            <div class="thumb">
                                <img src="/images/portfolio/nav1.jpg" alt="image">
                                <a href="#"><i class="icofont-double-left"></i></a>
                            </div>
                            <div class="content">
                                <img class="line-shape" src="/images/shape/line-s1.png" alt="image">
                                <h4><a href="#">Digital Marketing</a></h4>
                                <n-link to="/project" class="category">Business / Marketing</n-link>
                            </div>
                        </div>
                        <div class="nav-item-center">
                            <a href="#">
                                <img src="/images/icons/dot.png" alt="image">
                            </a>
                        </div>
                        <div class="nav-item next">
                            <div class="thumb">
                                <img src="/images/portfolio/nav2.jpg" alt="image">
                                <a href="#"><i class="icofont-double-right"></i></a>
                            </div>
                            <div class="content">
                                <img class="line-shape" src="/images/shape/line-s1.png" alt="image">
                                <h4><a href="#">Business Consulting</a></h4>
                                <n-link to="/project" class="category">Business / Marketing</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="comment-form" data-aos="fade-up" data-aos-duration="1100">
                        <div class="section-title text-center">
                            <h2 class="title">Leave a <span>Comments.</span></h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-10 m-auto">
                                <form>
                                    <div class="comment-form-content">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input class="form-control" type="text" placeholder="Name" required="">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input class="form-control" type="email" placeholder="Email Address" required="">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea class="form-control textarea" name="comment" id="comment" cols="45" rows="7" placeholder="Message" required=""></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group group-style mb-0">
                                                    <button class="btn btn-theme" type="submit">Submit Now <i class="icon icofont-long-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

    export default {
        components: {
            CoolLightBox,
        },

        data() {
            return {
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
                        autoplay: true
                    },
                ],
                index: null
            }
        },
    };
</script>
