<template>
  <div @click="goDetails" class="card">
    <img :src=item.url class="img">
    <div class="info">
      <p class="tag">文化系</p>
      <h2 class="title">{{item.name}}</h2>
      <p class="location">{{getLocation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "item"
  ],
  computed: {
    getLocation(){
      switch(this.item.location){
        case 0:
          return "豊中キャンパス";
          break;
        case 1:
          return "吹田キャンパス";
          break;
        case 2:
          return "吹田キャンパス";
          break;
        default:
          return "-";
          break;
      }
    }
  },
  methods: {
    goDetails(){
      this.$router.push({ name: 'DetailPage', params: { id: this.item.id }})
    }
  }
}
</script>


<style scoped>
  .card {
    width: 350px;
    height: 300px;
    margin: 0 auto;
  }

  .img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    vertical-align: bottom;

  }

  .info {

    width: 100%;
    height: 40%;
    text-align: left;
    background-color: #ffffff;
    padding: 20px;
  }

  .title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .tag {
    font-size: 12px;
    font-weight: 500;
    color: #f39800;
    margin-bottom: 12px;
  }

  .location {
    color: #808080;
    font-size: 12px;
  }

</style>
