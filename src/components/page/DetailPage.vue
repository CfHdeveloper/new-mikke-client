<template>
  <div class="page">
    <img :src=circleInfo.url class="img">

    <div class="info-container">
      <p class="catch-copy">{{circleInfo.title}}</p>
      <p class="name">{{circleInfo.name}}</p>
      <div class="tag-container">
        <p class="tag">文化系</p>
        <p class="tag">体育系</p>
      </div>
      <h3 class="el">キャンパス</h3>
      <p class="content">{{getLocation}}</p>
      <h3 class="el">活動日</h3>
      <h3 class="el">メンバー</h3>
      <p class="content">{{circleInfo.members}}人</p>
      
      <h3 class="el">年会費</h3>
      <p class="content">{{circleInfo.fee}}</p>
      <hr class="border">
      <p class="description" v-html="circleInfo.description"></p>
    </div>
  
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
  computed: {
    getLocation(){

      var locations = ['豊中キャンパス', '吹田キャンパス', '箕面キャンパス']
      return locations[this.circleInfo.location]

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

.tag {
  display: inline-block;
  font-size: 14px;
  background-color: orange;
  padding: 7px;
  color: white;
}

.tag-container {
  text-align: left;
  margin-bottom: 40px;
}

.page {
  background-color: #f6f6f6;
  min-height: 100vh;
}

.border {
  margin-top: 20px;
  margin-bottom: 20px;
}

.el {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
}

.content {
  font-size: 14px;
  text-align: left;
  margin-bottom: 20px;
  line-height: 25px;
}

.img {
  width: 100%;
  margin-top:20px;
  margin-bottom: 20px;
}

.info-container {
  padding: 20px;
  background-color: #ffffff;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 60px;
}

.name {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: left;
  margin-bottom: 15px;
}

.catch-copy {
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  line-height: 25px;
  font-weight: 300;
  letter-spacing: 1px;
  color: #2a2a2a;
  text-align: left;
  line-height: 25px;
}

</style>
