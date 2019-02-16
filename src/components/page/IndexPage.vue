<template>
  <div>
    <div class="mode-tab">
      <div @click="changeMode('index')">
        <p>サークル一覧</p>
      </div>
      <div @click="changeMode('like')">
        <p>お気に入り</p>
      </div>
      <index v-if="mode=='index'" :items="items"/>
      <like v-if="mode=='like'"/>  
    </div>
  </div>
</template>

<script>
import Index from '@/components/index/Index';
import Like from '@/components/index/Like';
export default {
  data(){
    return {
      items: [],
      mode: "index"
    }
  },
  created(){
    var query = this.$route.query;
    
    var url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles.json';
     
    this.$axios.get(url,{

      params: query

    }).catch(error => {

      return error

    }).then(response =>{
      this.items = response.data;
      console.log(this.items);
    });
  },
  methods: {
    changeMode(mode){
      this.mode = mode
    }
  },
  components: {
      'index': Index,
      'like': Like
  }
}
</script>

<style scoped>

</style>
