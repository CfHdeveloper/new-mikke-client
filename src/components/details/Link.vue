<template>
  <div class="link-container">
    <div class="link" @click="goToLink('hp')">
      <p class="icon home" :class="{ active: links.hp }"><font-awesome-icon icon="home" /></p>
    </div>
    <div class="link" @click="goToLink('twitter')">
      <p class="icon twitter" :class="{ active: links.twitter }"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></p>
    </div>
    <div class="link" @click="goToLink('facebook')">
      <p class="icon facebook" :class="{ active: links.facebook }"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/></p>
    </div>
  </div>
</template>

<script>
export default {

  props: [
    "links"
  ],
  methods: {
    goToLink(linkType){
      var url = this.links[linkType];

      if(url){
        window.open(url);
      }
    }
  }
  
}
</script>

<style scoped lang="scss">
  .link-container {
    color: #e0e0e0;
    width: 100%;
    border: 1px solid #606060;
    display: flex;
    margin: 0 auto;
    margin-bottom: 40px;

    .link {
      width: 33%;
      flex: 1;
      padding: 7px;

      @media screen and (min-width: 780px){

        padding: 15px;
        cursor: pointer;
        
      }
    }

    .link:not(:last-child) {
      border-right: 1px solid #606060;
    }

  }

  .active {
    color: #606060;
  }


</style>
