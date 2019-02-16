<template>
  <div>
    detailpage
    {{circleInfo.name}}
    <app-menu :circleId="circleInfo.id"/>

  </div>
</template>
ya
<script>
import Menu from '@/components/details/Menu'
export default {
  data(){
    return {
      circleInfo: {}
    }
  },
  components: {
    'app-menu': Menu
  },
  created(){
    var id = this.$route.params.id;
    
    var url = `http://tk2-215-17314.vs.sakura.ne.jp:3000/circles/${id}.json`;
     
    this.$axios.get(url)
    
    .catch(error => {

      return error

    }).then(response =>{
      this.circleInfo = response.data;
      console.log(this.circleInfo);
    });
  },
  
}
</script>

<style scoped>

</style>
