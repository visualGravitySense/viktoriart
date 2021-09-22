<template>
  <section class="contact-area">

    <div class="container">

      <div class="contact-info-light" data-aos="fade-up" data-aos-duration="1000">
        <!--      <div class="contact-info-content">-->
        <!--        <div class="contact-info-item">-->

        <div class="comment-form" data-aos="fade-up" data-aos-duration="1000">

          <Message v-if="message" :message="message" />
          <form @submit.prevent="onSubmit">

            <div class="comment-form-content">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
<!--                    Name-->
                    <AppInput v-model="blog.title" required="" > New Job title </AppInput>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
<!--                    Email-->
                    <AppInput v-model="blog.email" type="email" required=""> Email: </AppInput>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
<!--                    TextArea-->
                    <AppTextArea v-model="blog.excerpt" class="form-control textarea" name="comment" id="comment" cols="45" rows="7"  required=""> TextArea: </AppTextArea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
<!--                  <div class="form-group group-style mb-0">-->
<!--                    <button @click="onSubmit" class="btn btn-theme" type="submit">Submit Now <i class="icon icofont-long-arrow-right"></i></button>-->
                    <AppButton @click="onSubmit" type="submit">Submit Now </AppButton>
<!--                  </div>-->
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--  </div>-->
  </section>
  <!--  </section>-->
</template>

<script>

export default {

  components: {
    // Message: () => import('@/components/UI/Message'),
    // AppInput: () => import('@/components/UI/Controls/Input'),
    // AppTextArea: () => import('@/components/UI/Controls/TextArea'),
    // AppButton: () => import('@/components/UI/Controls/Button'),
  },

  props: {
    blogEdit: {
      type: Object,
      required: false
    }
  },

  data () {
    return {
      blog: this.blogEdit ? { ...this.blogEdit } : {
        title: '',
        email: '',
        excerpt: '',
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.blog)
    },
    cancel () {
      this.$router.push('/admin/')
    }
  }
};
</script>

<style>
.comment-form-content {
  padding: 25px 25px 0px;
  /*margin-left: 150px;*/
}
</style>
