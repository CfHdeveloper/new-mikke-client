<template>
  <div class="container">
    <div>
      <input type="text" v-model="word" class="input" placeholder="サークル名, キーワードで検索" v-on:keyup.enter="search"/>
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

<style scoped lang="scss">

  .container {

    @media screen and (min-width: 780px){

      position: fixed;
      top: 59px;
      left: 0;

      width: 100%;
      font-size:0;

      padding: 20px;

      background-color: #ffffff;
      border-bottom: 1px solid #c0c0c0;
      
    }

    @media screen and (max-width: 779px){

      position: fixed;
      top: 0;
      left: 0;

      padding: 10px;

      width: 100%;
      font-size:0;

      background-color: #ffffff;
      border-bottom: 1px solid #c0c0c0;
      
    }
  }

  .input {
    background-color: #f6f6f6;
    border: none;
    width: 90%;
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
