<template>
  <div class="message" v-if="message">
    <p>{{ message }}</p>
  </div>
<!--  <p> Message component - {{ message }} </p>-->
<!--  <div class="new-event" v-if="message">-->
<!--    <h1>Hello World</h1>-->
<!--    <p>{{ message }}</p>-->
<!--  </div>-->
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  name: "Message"
}
</script>
<style lang="scss" scoped>
.message {
  text-align: center;
  padding: 20px;
}
p {
  color: #ba3838
}
</style>