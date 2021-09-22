<template>
  <section class="contact-area">

    <div class="container">

      <div class="contact-info-light" data-aos="fade-up" data-aos-duration="1000">
<!--      <div class="contact-info-content">-->
<!--        <div class="contact-info-item">-->

          <div class="comment-form" data-aos="fade-up" data-aos-duration="1000">

<!--              Message-->
              <Message v-if="message" :message="message" />
              <form @submit.prevent>

                  <div class="comment-form-content">
                      <div class="row">
                          <div class="col-md-12">
                              <div class="form-group">
                                <input v-model="blog.title" class="form-control" placeholder="Title" required='' >  </input>
                              </div>
                          </div>
                          <div class="col-md-12">
                              <div class="form-group">
                                  <input v-model="blog.email" class="form-control" type="email" placeholder="Email Address" required="">  </input>
                              </div>
                          </div>
                          <div class="col-md-12">
                              <div class="form-group">
                                  <textArea v-model="blog.excerpt" class="form-control" name="comment" id="comment" cols="45" rows="7" placeholder="Message" required="">  </textArea>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-12">
                              <div class="form-group group-style mb-0">
<!--                                  <button class="btn btn-theme" type="submit">Submit Now <i class="icon icofont-long-arrow-right"></i></button>-->
                                  <AppButton @click="onSubmit" type="submit">Submit Now </AppButton>
                              </div>
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

  data () {
    return {
      message: null,
      blog: {
        title: '',
        email: '',
        excerpt: '',
      }
    }
  },

    methods: {
        onSubmit () {
            console.log(this.blog)
            this.$emit('submit', this.blog)
        }
    },

  // methods: {
  //   onSubmit () {
  //     console.log(this.blog)
  //     this.message = 'Submited!'
  //     // Reset
  //     this.blog.title = ''
  //     this.blog.email = ''
  //     this.blog.excerpt = ''
  //
  //   }
  // }
};
</script>

<style>
.comment-form-content {
  padding: 25px 25px 0px;
  /*margin-left: 150px;*/
}
</style>
