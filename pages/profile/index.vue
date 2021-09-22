<template>
    <div class="service-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <PageTitleUser title='User Profile' breadcrumbTitle="User Profile" />

        


        <div class="blog-page-wrapper">
          <CourseWrapperUser />
        </div>

        <UserWrapper />

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
            ServiceWrapper: () => import('@/components/ServiceWrapper'),
            ContactDevider: () => import('@/components/ContactDevider'),
            CourseWrapperUser: () => import('@/components/Courses/CourseWrapperUser'),
            Footer: () => import('@/components/Footer'),
        },

      head() {
        return {
          title: 'User Profile'
        }
      },

        data: {

          title: 'Add new work',

        }

    };
</script>


