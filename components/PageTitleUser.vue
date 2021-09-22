<template>
    <section class="page-title-area" :style="{ backgroundImage: `url('/images/photos/bg-page-title-user.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title-content">
                        <h2 class="title text-white">{{ title }}</h2>
                        <div class="bread-crumbs"><img class="line-shape" src="/images/shape/line-s3.png" alt="shape">
                            <p>is creating worlds made of words</p>
                        </div>
                      <slot       />
                    </div>
                </div>
            </div>
        </div>
        <div class="page-sidebar" data-aos="fade-right" data-aos-duration="1100">
            <div class="social-icon">
                <a href="#"><i class="icofont-facebook"></i></a>
                <a href="#"><i class="icofont-skype"></i></a>
                <a href="#"><i class="icofont-twitter"></i></a>
            </div>
        </div>
        <div class="layer-shape">
            <img class="layer-shape-one" src="/images/shape/1.png" alt="shape">
            <img class="layer-shape-two" src="/images/shape/4.png" alt="shape">
            <img class="layer-shape-three" src="/images/shape/5.png" alt="shape">
            <img class="layer-shape-four" src="/images/shape/3.png" alt="shape">
        </div>
    </section>
</template>

<script>
    export default {
        props: ['title', 'breadcrumbTitle']
    };
</script>
