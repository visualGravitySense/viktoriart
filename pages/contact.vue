<template>
    <div class="contact-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <PageTitle title="Contact Us" breadcrumbTitle="Contact" />

        <ContactWrapper />

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
            ContactWrapper: () => import('@/components/ContactWrapper'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        head() {
            return {
                title: 'Contact Us'
            }
        },
    };
</script>


