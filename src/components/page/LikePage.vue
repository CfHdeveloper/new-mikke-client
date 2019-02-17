<template>
  <div>
    <app-header @search="search"/>
    <div class="mode-tab">
      
      <div @click="changeMode('index')">
        <p>サークル一覧</p>
      </div>
      <div @click="changeMode('like')">
        <p>お気に入り</p>
      </div>  
    </div>

    <index :items="items"/>
  </div>
</template>

<script>
import SearchBar from '@/components/index/SearchBar';
import Index from '@/components/index/Index';

export default {
  data(){
    return {
      items: [],
      mode: "index"
    }
  },
  created(){

    var query = this.$route.query;
    this.getWholeCircles(this.$route.query)

  },
  methods: {
    changeMode(mode){
      this.mode = mode

      //api通信でitemをリフレッシュ
      if(this.mode == 'index'){

        this.getWholeCircles();

      }else{

        //indexモードに強制移行
        this.mode = "index";

        var url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles/ids.json';
        const userKeepId = localStorage.getItem("user") || false;

        //お気に入りが存在する場合
        if(userKeepId){

          var userKeepIdArray = userKeepId.split("");
          console.log(userKeepIdArray);
          this.$axios.post(url,
          {
            "ids":userKeepIdArray
          }
          
          ).catch(error => {

            return error

          }).then(response =>{

            this.items = response.data;

          });

        }else{
          this.item = []
        }

      }
    },
    search(word){

      //indexモードに強制移行
      this.mode = "index";

      var query = {
        freeword: word
      };

      var url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles.json';
     
     this.$axios.get(url,{

        params: query,       

      }).catch(error => {

        return error

      }).then(response =>{

        this.items = response.data;

      });
    },

    getWholeCircles(query={}){
      
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
      'app-header':Header
  }
}
</script>

<style scoped>

</style>
