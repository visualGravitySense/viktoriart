<template>
  <div class="post-item">

  </div>
</template>

<script>
export default {
  name: "JobsPreview",
  computed: {
    blogs() {
      return this.$store.getters.getPostsLoaded
    },
    getLink () {
      return this.admin ? `/admin/${this.blog.id}` : `/blog/${this.blog.id}`
    }
  }
}

</script>

<style scoped>

</style>
