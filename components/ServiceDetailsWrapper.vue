<template>
    <section class="service-details-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="service-details-column">
                        <div class="service-details-content">
                            <div class="thumb" data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/photos/service1.jpg" alt="image">
                            </div>
                            <n-link to="/service" class="category">Business / Marketing</n-link>
                            <h2 class="title">Business Consulting.</h2>
                            <div class="separator-line">
                                <img class="me-1" src="/images/shape/line-s2.png" alt="shape image">
                                <img src="/images/shape/line-s1.png" alt="shape image">
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p>
                            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p>
                            <blockquote class="blockquote" data-aos="fade-up" data-aos-duration="1000">
                                <p>Lorem Ipsum is simply dummy text of the printing and industry standard dummy text ever since the 1500s, scrambled it make a type specimen book.</p>
                                <img class="me-1" src="/images/photos/signature.png" alt="shape image">
                            </blockquote>
                            <h2 class="title">How To Work?</h2>
                            <div class="separator-line">
                                <img class="me-1" src="/images/shape/line-s2.png" alt="shape image">
                                <img src="/images/shape/line-s1.png" alt="shape image">
                            </div>
                            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p>
                            <ul class="list-style2">
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>Industry' standard dummy text ever since the type book.</span></li>
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>It is a long established fact that reader will be distracted content.</span></li>
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>Many desktop publishing packages and web page editors.</span></li>
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>Variou version have evolved over the year sometimes accident.</span></li>
                            </ul>
                            <p class="mb-34">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p>
                            <h2 class="title">Find Solution.</h2>
                            <div class="separator-line">
                                <img class="me-1" src="/images/shape/line-s2.png" alt="shape image">
                                <img src="/images/shape/line-s1.png" alt="shape image">
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        
                        <div class="sidebar-area">
                            <ServiceCategoryWidget />

                            <WidgetVideo />

                            <WidgetSocial />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            ServiceCategoryWidget: () => import('@/components/ServiceCategoryWidget'),
            WidgetVideo: () => import('@/components/WidgetVideo'),
            WidgetSocial: () => import('@/components/WidgetSocial'),
        },
    };
</script>