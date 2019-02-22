<template>
  <div class="link-container">
    <div class="link" @click="goToLink(0)">
      <p class="icon home"><font-awesome-icon icon="home" /></p>
    </div>
    <div class="link" @click="goToLink(1)">
      <p class="icon twitter"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></p>
    </div>
    <div class="link" @click="goToLink(2)">
      <p class="icon facebook"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/></p>
    </div>
  </div>
</template>

<script>
export default {

  props: [
    "links"
  ],
  mounted(){
    var linkArray = this.links.slice(1).slice(0,-1).split(',');
    var index = 0;

    linkArray.forEach(element => {
      var url = element.slice(1).slice(0,-1);
      console.log(index,element);
      if(! url){
        document.getElementsByClassName('icon')[index].style.color = '#e0e0e0';
      }
      index += 1;
      
    });
  },
  methods: {
    goToLink(linkNum){

      //ここAPIの仕様で死ぬほど面倒臭いので中川に言って変えてもらう
      var linkArray = this.links.slice(1).slice(0,-1).split(',');
      var url = linkArray[linkNum].slice(1).slice(0,-1);

      if(url){
        window.open(linkArray[linkNum].slice(1).slice(0,-1));
      }else{
        console.log('url not found');
      }
    }
  }
  
}
</script>

<style scoped lang="scss">
  .link-container {
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
        
      }
    }

    .link:not(:last-child) {
      border-right: 1px solid #606060;
    }

  }


</style>
