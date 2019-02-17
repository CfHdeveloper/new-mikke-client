<template>
  <div class="page">
    <search-bar @search="search"/>
    <!-- <div class="mode-tab">
      
      <div @click="changeMode('index')">
        <p>サークル一覧</p>
      </div>
      <div @click="changeMode('like')">
        <p>お気に入り</p>
      </div>  
    </div> -->

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

<style scoped>

  .page {
    background-color: #f6f6f6;
  }

</style>
