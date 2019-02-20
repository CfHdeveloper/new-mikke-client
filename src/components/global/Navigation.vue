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
  text-decoration: none;
  color: #000000;

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

.router-link-active {
  color: #f39800;
}

</style>
