<template>
  <div class="navigation">
    <div class="button-container">
      <p class="icon"><font-awesome-icon icon="home" /></p>
      <p class="title">ホーム</p>
 
    </div>

    <div class="button-container">
      <p class="icon"><font-awesome-icon icon="search" /></p>
      <p class="title">探す</p>
    </div>

    <div class="button-container">
      <p class="icon"><font-awesome-icon icon="heart" /></p>
      <p class="title">お気に入り</p>
    </div>

    <div class="button-container">
      <p class="icon"><font-awesome-icon icon="ellipsis-h" /></p>
      <p class="title">その他</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

p {
  margin: 0;
}

.navigation {
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 50px;

  background-color:white;
  border-top: 1px solid #c0c0c0;
}

.button-container {
  width: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
}

.icon {
  margin-bottom: 5px;
}
.title {
  font-size: 5px;
  font-weight: 500;
}

</style>
