<template>
  <div class="navigation">
    <router-link class="button-container" :to="{ path: '/'}" exact>
      <p class="icon home"><font-awesome-icon icon="home" /></p>
      <p class="title home">ホーム</p>
    </router-link>

    <router-link class="button-container" :to="{ path: '/search'}" exact>
      <p class="icon search"><font-awesome-icon icon="search" /></p>
      <p class="title search">みつける</p>
    </router-link>

    <router-link class="button-container" :to="{ path: '/likes'}" exact>
      <p class="icon like"><font-awesome-icon icon="heart" /></p>
      <p class="title like">お気に入り</p>
    </router-link>

    <router-link class="button-container" :to="{ path: '/others'}" exact>
      <p class="icon other"><font-awesome-icon icon="ellipsis-h" /></p>
      <p class="title other">その他</p>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">

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

  padding-bottom: 20px;
  padding-left: 80px;

  background-color:white;
  border-top: 1px solid #c0c0c0;

  @media screen and (min-width:780px){

    //PC版では上側固定
    top: 0;
    bottom: initial;
    padding-bottom: 0;
    padding-right: 10%;

    border-bottom: 1px solid #c0c0c0;
    border-top: none;

    justify-content: start;
  }
  
}

.button-container {

  //pc版
  @media screen and (min-width:780px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #909090;
    padding: 7px;
    height: 50px;
    width: 110px;
    transition: .1s;
    cursor: pointer;

    //ホバーエフェクト
    &:hover{
      border-bottom: 4px solid orange;
      color: orange;
    }
  }

  //スマホ版
  @media screen and (max-width:779px){
    display: none;
    color: #000000;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;

    width: 25%;
  }


}

.icon {
  margin-bottom: 5px;
  font-size: 20px;

  @media screen and (min-width:780px){
    font-size: 18px;
    margin-right: 10px;
  }


}
.title {
  font-size: 7px;
  font-weight: 500;

  @media screen and (min-width:780px){
    font-size: 12px;
    font-weight: 600;
  }
}

.router-link-active {
  color: #f39800;

  @media screen and (min-width:780px){

    border-bottom: 4px solid orange;
    color: orange;
    
  }
}

</style>
