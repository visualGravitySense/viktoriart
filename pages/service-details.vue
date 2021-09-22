<template>
    <div class="service-details-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <PageTitle title="Business Consulting" breadcrumbTitle="Service Details" />

        <ServiceDetailsWrapper />

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
            ServiceDetailsWrapper: () => import('@/components/ServiceDetailsWrapper'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Service Details'
            }
        },
    };
</script>


