<template>
  <div class="message" :class="messClass">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    mesClass: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.message {
  font-size: 22px;
  &.success {
    color: #26de81;
  }
  &.error {
    color: #fc5c65;
  }
}

</style>
