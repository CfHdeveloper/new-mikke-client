<template>
  <div>
    detailpage
    {{circleInfo.name}}
  </div>
</template>
ya
<script>
export default {
  data(){
    return {
      circleInfo: {}
    }
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
