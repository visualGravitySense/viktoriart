<template>
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{ full: !grid }" >
        <p>{{ note.title }}</p>

<!--        <p style="cursor: pointer;" @click="removeNote(index)">x</p>-->

        <span>{{ note.date }}</span>
        <span>{{ note.excerpt }}</span>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    removeNote (index) {
      console.log(`Note id - ${index} removed`)
      this.$emit('remove', index)
    }
  },
  name: "Events"
}
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 13%;
  height: 150px;
  padding: 3px 3px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  transition: all .25s cubic-bezier(.02,.01,.47,1) ;
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.04);
    transform: translate(0,-6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 49%;
    text-align: center;
  }
}
.note-header {
  display: wrap;
  align-items: left;
  justify-content: space-between;
  h1 {
    font-size: 22px;
  }
  p {
    font-size: 22px;
    color: #003af9;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.note-body {
  p {
    margin: 5px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
</style>