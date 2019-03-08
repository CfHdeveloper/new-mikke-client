<template>
  <div class="container">
    <div>
      <input type="text" v-model="word" class="input" placeholder="サークル名, キーワードで検索"/>
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
  watch: {
    word (newVal, oldVal) {
      this.search();
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

    z-index: 100;

    @media screen and (min-width: 780px){

      position: fixed;
      top: 48px;
      left: 0;

      width: 100%;
      font-size:0;

      padding: 30px;

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
    background-color: #ffffff;
    border: 1px solid #606060;
    font-size: 14px;

    //pc版
    @media screen and (min-width: 780px){
      width: 100%;
      max-width: 960px;
      padding: 12px 50px 12px 20px;
    }

    //スマホ版
    @media screen and (max-width: 779px){
      width: 90%;
      padding: 7px;
    }


  }

  .btn {
    color: #ffffff;
    background-color: #f39800;
    border: none;
    padding: 7px;

    font-size: 14px;
  }

</style>
