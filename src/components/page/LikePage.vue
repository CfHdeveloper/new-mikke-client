<template>
  <div class="page">
    <div class="header">
      <p class="title">お気に入り</p>
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
      mode: "index"
    }
  },
  created(){

    this.getCircles()

  },
  methods: {

    getCircles(){

      var userKeepId = localStorage.getItem("user") || false;
      if(userKeepId){
        var userKeepIdArray = userKeepId.split(",")
      }else{
        return
      }
      
      var url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles/ids.json';
      
      this.$axios.post(url,{

        ids: userKeepIdArray

      }).catch(error => {

        return error

      }).then(response =>{
        this.items = response.data;
      });

    }
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
