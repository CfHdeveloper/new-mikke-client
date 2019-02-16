<template>
  <div>
    <div>
      <input type="text" v-model="word"/>
      <button @click="search">検索</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      word: ""
    }
  },
  methods: {
    search(){
      this.$emit('search', this.word);
    }
  }
}
</script>

<style scoped>

</style>
