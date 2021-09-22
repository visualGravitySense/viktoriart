<template>
    <footer class="footer-area bg-img-cover" :style="{ backgroundImage: `url('/images/photos/bg-footer.jpg')` }">
        <div class="footer-top" data-aos="fade-up" data-aos-duration="1000">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contact-info-content">
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c1.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Call Us.</h4>
<!--                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">-->
                                    <a href="tel:0037258976398">+372 5897 6398</a>
<!--                                    <a href="tel://0123456789">0123456789</a>-->
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c2.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Email.</h4>
<!--                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">-->
                                    <a href="mailto://kangelane@deepfatsnail.eu">kangelane@deepfatsnail.eu</a>
<!--                                    <a href="mailto://demo@gmail.com">demo@gmail.com</a>-->
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c3.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Location.</h4>
<!--                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">-->
                                    <p>Pae 21, Tallinn <br>Estonia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <div class="row">
                <div class="col-md-9 col-lg-4 col-xl-4">
                    <div class="widget-item mt-0">
                        <div class="about-widget">
                            <n-link to="/" class="footer-logo">
                                <img src="/images/logo/logo.png" alt="Logo">
                            </n-link>
                            <p>On Kangelane, you can find your business needs and be a part of creative community in Estonia. You get access to exclusive content, community, and insight into creative process of creators.</p>

<!--                           <div class="widget-newsletter">-->
<!--                                <form>-->
<!--                                    <input type="email" class="form-control" placeholder="Enter your email">-->
<!--                                    <button type="submit" class="btn btn-theme">-->
<!--                                        Subscribe Now <i class="icon icofont-long-arrow-right"></i>-->
<!--                                    </button>-->
<!--                                </form>-->
<!--                            </div>-->

                        </div>
                    </div>
                </div>


<!--              ALL SERVICES MENU-->
<!--              ALL SERVICES MENU-->
<!--              ALL SERVICES MENU-->
<!--                <div class="col-md-8 col-lg-6 col-xl-6">-->
<!--                    <div class="widget-item menu-wrap-two-column">-->
<!--                        <h4 class="widget-title">All Categories</h4>-->
<!--                        <img class="line-shape" src="/images/shape/line-s1.png" alt="shape">-->
<!--                        <nav class="widget-menu-wrap">-->
<!--                            <div class="row">-->
<!--                                <div class="col-md-6">-->
<!--                                    <ul class="nav-menu nav">-->
<!--                                        <li><n-link to="">Business</n-link></li>-->
<!--                                        <li><n-link to="">Programming & Tech</n-link></li>-->
<!--                                        <li><n-link to="">Digital Marketing</n-link></li>-->
<!--                                        <li><n-link to="">Graphics & Design</n-link></li>-->
<!--                                        <li><n-link to="">Data</n-link></li>-->

<!--                                    </ul>-->
<!--                                </div>-->
<!--                                <div class="col-md-6">-->
<!--                                    <ul class="nav-menu nav">-->
<!--                                        <li><n-link to="">Music & Audio</n-link></li>-->
<!--                                        <li><n-link to="">Video & Animation</n-link></li>-->
<!--                                        <li><n-link to="">Writing & Translation</n-link></li>-->
<!--                                        <li><n-link to="">Consulting</n-link></li>-->
<!--                                        <li><n-link to="">Lifestyle</n-link></li>-->
<!--                                    </ul>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </nav>-->
<!--                    </div>-->
<!--                </div>-->

                <div class="col-md-4 col-lg-2 col-xl-2 lg-pr-0">
                    <div class="widget-item menu-wrap-column">
                        <h4 class="widget-title">О нас</h4>
<!--                        <img class="line-shape" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">-->
                        <nav class="widget-menu-wrap">
                            <ul class="nav-menu nav">
                                <li><n-link to="/">Главная</n-link></li>
                                <li><n-link to="/artstudio">Студия Живописи</n-link></li>
                                <li><n-link to="/vacations">Творческие Каникулы</n-link></li>
                                <li><n-link to="/partys">Праздники</n-link></li>
                                <li><n-link to="/contact">Контакт</n-link></li>
<!--                                <li><n-link to="">Sustainability</n-link></li>-->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="row align-items-center">
                        <div class="col-md-6 order-2 order-md-1">
                            <div class="widget-copyright">
                                <p>© 2021 <span>Viktoria Art</span></p>
                            </div>
                        </div>
                        <div class="col-md-6 order-1 order-md-2">
                            <div class="widget-social-icons">
                                <a href="#"><i class="icofont-facebook"></i></a>
                                <a href="#"><i class="icofont-skype"></i></a>
                                <a href="#"><i class="icofont-instagram"></i></a>
                                <a href="#"><i class="icofont-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>
