<template>
  <div class="page">
    <div class="header">
      <p class="title">検索結果</p>
    </div>
    <div>
      <!-- ここには何に対する何の検索結果かを入れる -->
    </div>
    <index :items="items"/>
  </div>
</template>

<script>
import Index from '@/components/index/Index';

export default {
  data(){
    return {
      items: [],
      mode: "index",
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

    getCircles(query={}){
          
      var url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles.json';
      
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
  },
  components: {
      'index': Index
  }
}
</script>

<style scoped lang="scss">
  .page {
    background-color: #f6f6f6;
    min-height: 100vh;
  }

  .title {
    font-size: 13px;
    font-weight: 600;
    
  }

  .header {
    width: 100%;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #c0c0c0;
    background-color: #ffffff;

    z-index: 50;

    position: fixed;
    top: 0;
    left: 0;

    @media screen and (min-width: 780px){
      display: none;
    }
  }

</style>
