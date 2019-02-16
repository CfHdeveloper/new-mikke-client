<template>
  <div @click="goDetails">
    {{item.name}}
  </div>
</template>

<script>
export default {
  props: [
    "item"
  ],
  methods: {
    goDetails(){
      this.$router.push({ name: 'DetailPage', params: { id: this.item.id }})
    }
  }
}
</script>


<style scoped>

</style>
