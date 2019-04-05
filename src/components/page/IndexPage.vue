<template>
  <div class="page">
    <search-bar @search="search"/>
    <index :items="showedItems"/>
    <pagination :circleCount = "circleCount" v-if="circleCount >= 2 && state.pc" @pagination-clicked = "goNextPagination"/>
  </div>
</template>

<script>
import SearchBar from '@/components/index/SearchBar';
import Index from '@/components/index/Index';
import Pagination from '@/components/index/Pagination'

export default {
  data(){
    return {

      items: [],
      showedItems: [],
      state: {
        pc: true
      }

    }
  },
  created(){

    var query = this.$route.query;

    //pc版の場合とスマホ版の場合でpaginationの仕方を変更
    if(window.parent.screen.width>780){
      this.state.pc = true;
    }else{
      this.state.pc = false;
    }

    this.getCircles(this.$route.query)


  },
  methods: {

    search(word){

      var query = {
        freeword: word
      };

      this.getCircles(query)
     
    },

    getCircles(query={}){
      
      var url = 'https://obywnhxkxa.execute-api.ap-northeast-1.amazonaws.com/dev/circles.json';
      
      this.$axios.get(url,{

        params: query

      }).catch(error => {

        return error

      }).then(response =>{
        this.items = response.data;
        //pagination処理

        if(this.state.pc){
          this.showedItems = this.items.slice(0, 15);
        }else{
          //スマホ版はひとまず全部読み込み
          this.showedItems = this.items;
        }
      });

    },

    goNextPagination(n){
      this.showedItems = this.items.slice(15*(n-1), 15*n);
    }
  },
  computed: {
    circleCount(){
      return Math.ceil(this.items.length/15);
    }
  },
  components: {
      Index,
      SearchBar,
      Pagination
  }
}
</script>

<style scoped lang="scss">

  .page {
    background-color: #f6f6f6;
    min-height: 100vh;
    width: 100%;

    @media screen and (min-width: 780px){

      //pc版ではヘッダー分だけ下げる
      padding-top: 60px;
      
    }

    .hero-img {
      width: 100%;
      height: 90vh;
      object-fit: cover;
      background-color: orange;
    }
  }


</style>
