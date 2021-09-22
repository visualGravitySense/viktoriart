<template>
  <button
    class="btn"
    :class="btnClass"
    v-on="$listeners"
    v-bind="attrs"
    >
    <slot />
    <i class="icon icofont-long-arrow-right"></i>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnClass: {
      type: String,
      default: 'btn-theme'
    }
  }
}
</script>

<style scoped>

</style>
