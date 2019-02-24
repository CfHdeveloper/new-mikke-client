<template>
  <div class="page">
    <search-bar @search="search"/>
    <index :items="items"/>
  </div>
</template>

<script>
import SearchBar from '@/components/index/SearchBar';
import Index from '@/components/index/Index';

export default {
  data(){
    return {

      items: []

    }
  },
  created(){

    var query = this.$route.query;
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
      
      var url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles.json';
      
      this.$axios.get(url,{

        params: query

      }).catch(error => {

        return error

      }).then(response =>{
        this.items = response.data;
      });

    }
  },
  components: {
      'index': Index,
      'search-bar': SearchBar
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
  }


</style>
