<template>
  <div class="container">
    <div>
      <input type="text" v-model="word" class="input" placeholder="サークル名, キーワードで検索"/>
      <button @click="search" class="btn"><font-awesome-icon icon="search" /></button>
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

  .container {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    padding: 10px;

    font-size:0;

    background-color: #ffffff;
    border-bottom: 1px solid #c0c0c0;
  }

  .input {
    background-color: #f6f6f6;
    border: none;
    width: 80%;
    padding: 7px;

    font-size: 14px;
  }

  .btn {
    color: #ffffff;
    background-color: #f39800;
    border: none;
    padding: 7px;

    font-size: 14px;
  }

</style>
