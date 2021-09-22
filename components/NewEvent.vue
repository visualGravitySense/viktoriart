<template>

  <div class="form-group">
    <input v-model="note.title" class="form-control" type="text" >
    <textarea class="form-control" v-model="note.excerpt" ></textarea>
    <AppButton @click="addNote">New Event</AppButton>
  </div>

</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    addNote () {
      this.$emit('addNote', this.note)
    }
  },
  name: "NewEvent"
}
</script>

<style scoped>

</style>