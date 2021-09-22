<template>
    <div class="blog-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <PageTitle title="Github" breadcrumbTitle="Github" />
<!--      ERROR-->
        <JobsWrapper />

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
        // methods: {
        //   onSubmit () {
        //     this.message = 'Submited'
        //     // Reset
        //     // this.user.name = ''
        //     // this.user.email = ''
        //     // this.user.text = ''
        //     // console.log(this.user)
        //   }
        // },
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            PageTitle: () => import('@/components/PageTitle'),
            JobsWrapper: () => import('@/components/JobsWrapper'),
            JobsForm: () => import('@/components/JobsForm'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Blog'
            }
        },

        methods: {
          onSubmit (post) {
            // console.log('Post added!!!')
            // console.log(post)
            this.$store.dispatch('addPost', post)
              .then(()=>{
                this.$router.push('/')
              })
          }
        },
        // computed: {
        //   postsLoaded () {
        //     // console.log(postsLoaded ())
        //     return this.$store.getters.getPostsLoaded
        //   }
        // },
      props: {
        posts: {
          type: Array,
          required: true
        },
        admin: {
          type: Boolean,
          default: false
        }
      }
    };
</script>


