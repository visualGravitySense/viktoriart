<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <form @submit.prevent="onSubmit">
        <div class="comment-form-content">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <AppInput class="form-control" required=""> Test Name </AppInput>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input class="form-control" type="email" placeholder="Email Address" required="">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <textarea class="form-control textarea" name="comment" id="comment" cols="45" rows="7" placeholder="Message" required=""></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group group-style mb-0">
                <button class="btn btn-theme" type="submit">Submit Now <i class="icon icofont-long-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplyJob",
  components: {
    AppInput: () => import('@/components/UI/Controls/Input'),
    AppTextArea: () => import('@/components/UI/Controls/TextArea'),
  },
}
</script>

<style scoped>

</style>
