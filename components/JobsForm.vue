<template>
  <section class="contact-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact-colunm" data-aos="fade-up" data-aos-duration="1000">
            <div class="contact-form">
              <form @submit.prevent class="contact-form-wrapper">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-title">
                      <div class="subtitle-content">
                        <img src="/images/shape/line-s4.png" alt="shape">
                        <h5 class="text-light">Contact Us</h5>
                      </div>
                      <h2 class="title text-light">Get In <span>Touch.</span></h2>
                      <div class="separator-line">
                        <img src="/images/shape/line-s4.png" alt="shape">
                        <img src="/images/shape/line-s4.png" alt="shape">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
<!--                      <AppInput class="form-control" v-model="post.title"> Title: </AppInput>-->
                      <AppInput v-model="post.title" class="form-control"  name="con_name" > Name 1</AppInput>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <AppInput class="form-control" type="email" name="con_email" placeholder="Email"></AppInput>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <AppInput class="form-control" type="text" name="con_phone" placeholder="Phone"></AppInput>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-0">
                      <AppTextArea name="con_message" placeholder="Message"></AppTextArea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-0">
                      <button @click="onSubmit" class="btn btn-theme" type="submit">Submit Now <i class="icofont-long-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </form>
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
    AppInput: () => import('@/components/UI/Controls/Input'),
    AppTextArea: () => import('@/components/UI/Controls/TextArea'),
  },
  name: "NewPostForm",
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      post: this.postEdit ? {
        ...this.postEdit
      } : {
        title: '',
        text: '',
        likes: '',
        views: '',
        poster: ''
      }
    }
  },
  methods: {
    onSubmit () {
      // console.log("OK!")
      this.$emit('submit', this.post)
    },
    cancel () {
      this.$router.push('/admin')
    }
  }
}
</script>
