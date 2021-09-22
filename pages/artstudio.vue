<template>
    <div class="about-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <PageTitle title="About Us" breadcrumbTitle="About" />

        <FeatureList />

        <AboutTwo />

        <FunFactOne />

        <TeamSection />

        <BrandLogoSection />

        <TestimonialOne />

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
            PageTitle: () => import('@/components/PageTitle'),
            FeatureList: () => import('@/components/FeatureList'),
            AboutTwo: () => import('@/components/AboutTwo'),
            FunFactOne: () => import('@/components/FunFactOne'),
            TeamSection: () => import('@/components/TeamSection'),
            BrandLogoSection: () => import('@/components/BrandLogoSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'About'
            }
        },
    };
</script>


