<template> 
  <div class="page">
    <div class="header">
      <p class="header-title">検索</p>
    </div>
    <div class="container">
      <h2 class="title">キャンパスから見つける</h2>
      <ul>
        <li class="list-item" @click="goNextPage('location', 0)">豊中キャンパス</li>
        <li class="list-item" @click="goNextPage('location', 1)">吹田キャンパス</li>
        <li class="list-item" @click="goNextPage('location', 2)">箕面キャンパス</li>
        <li class="list-item" @click="goNextPage('location', 3)">その他</li>
      </ul>
    </div>
    <div class="container">
      <h2 class="title">曜日から見つける</h2>
      <ul>
        <li class="list-item" @click="goNextPage('days', 0)">月</li>
        <li class="list-item" @click="goNextPage('days', 1)">火</li>
        <li class="list-item" @click="goNextPage('days', 2)">水</li>
        <li class="list-item" @click="goNextPage('days', 3)">木</li>
        <li class="list-item" @click="goNextPage('days', 4)">金</li>
        <li class="list-item" @click="goNextPage('days', 5)">土</li>
        <li class="list-item" @click="goNextPage('days', 6)">日</li>
      </ul>
    </div>
    <div class="container">
      <h2 class="title">タグから見つける</h2>
      <ul>
        <li class="list-item" @click="goNextPage('genres', '文化系')">文化系</li>
        <li class="list-item" @click="goNextPage('genres', '体育会系')">体育会系</li>
        <li class="list-item" @click="goNextPage('genres', 'テニス')">テニス</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    goNextPage(key, value){
      this.$router.push({
        path: '/',
        query: {
          [key]: value
        }
      });
    }
  }
  
}
</script>

<style scoped>

.page {
  padding: 50px 0;
}

.container {
  padding: 20px 20px 20px 20px;
}

.header {
  width: 100%;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #c0c0c0;
  background-color: #ffffff;

  position: fixed;
  top: 0;
  left: 0;
}

.header-title {
  font-size: 13px;
  font-weight: 600;
}

.title {
  text-align: left;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 16px;
}

.list-item {
  text-align: left;
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 15px;
  margin-bottom: 10px;
  font-size: 14px;

}

</style>
