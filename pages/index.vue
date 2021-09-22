<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

<!--      EXPERIMENTS-->
<!--        <AboutTwo />-->
<!--        <AboutUser />-->
<!--        <ApplyJob />-->
<!--        <BlogSection />-->
<!--        <Comments />-->
<!--        <FeatureList />-->
<!--      EXPERIMENTS ENDS-->

        <HeroSlider />

        <AboutOne1 />

        <ServiceOne1 />

<!--        <FaqOne />-->

<!--        <LectorsSection class="team-default-area" />-->

        <TestimonialOne1 />

<!--        <PortfolioSection />-->
<!--        <TestimonialOne />-->
<!--        <BrandLogoSection />-->
<!--        <BlogSection />-->

        <ContactDevider />

        <Footer />

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top icofont-rounded-up"></i>
                <i class="arrow-bottom icofont-rounded-up"></i>
            </back-to-top>
        </client-only>

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroSlider: () => import('@/components/HeroSlider'),
            AboutOne1: () => import('@/components/AboutOne1'),
            AboutTwo: () => import('@/components/AboutTwo'),
            FunFactOne: () => import('@/components/FunFactOne'),
            ServiceOne1: () => import('@/components/ServiceOne1'),
            FaqOne: () => import('@/components/FaqOne'),
            LectorsSection: () => import('@/components/LectorsSection'),
            PortfolioSection: () => import('@/components/PortfolioSection'),
            TestimonialOne1: () => import('@/components/TestimonialOne1'),
            BrandLogoSection: () => import('@/components/BrandLogoSection'),
            BlogSection: () => import('@/components/BlogSection'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Home'
            }
        },
    };
</script>


