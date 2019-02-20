<template>
  <div class="menu-container" id="menu">
    <div class="menu-item" @click="shareOnTwitter">
      <p class="icon twitter"><font-awesome-icon icon="share"/></p>
      <p class="title">twitterで共有</p>
    </div>
    <div class="menu-item" @click="addLike">
      <p class="icon"><font-awesome-icon icon="heart" /></p>
      <p class="title">お気に入りに追加</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "circleId"
  ],
  data(){
    return {
      start_pos: 0 //スクロール検知用
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    addLike(){
      //ブラウザに保存されているidを取得
      const userKeepId = localStorage.getItem("user") || false;
      console.log(userKeepId)

      if(userKeepId && !userKeepId.match(String(this.circleId))){
          //ブラウザにすでにuserKeepIdが保存されていて、かつこのページのIdは保存されていない
          localStorage.setItem("user", userKeepId + this.circleId);

      }else if(! userKeepId){
          //ブラウザにuserKeepIdが保存されていない
          localStorage.setItem("user", this.circleId);

      }else{
          if(userKeepId.length　== 1){ //お気に入りが一つしか保存されていない（削除すると0件になる場合）

            localStorage.removeItem("user");

          }else{

            var userKeepIdDel = userKeepId.replace(String(this.circleId),"");
            localStorage.setItem("user", userKeepIdDel);

          }
      }
    },
    shareOnTwitter(){
      console.log('shareontwitter');
      var url = `http://twitter.com/intent/tweet?url=${location.href}&text=このサークルオススメ！サークルみっけでお気に入り見つけました！&hashtags=サークルミッケ`;
      window.open(url);
    },
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var current_pos =scrollTop;

      if (current_pos > this.start_pos) {
        //down
        document.getElementById('menu').style.bottom= "-70px";
        document.getElementById('menu').style.left= "50%";
        document.getElementById('menu').style.opacity= "0";
      }else{
        //up
        document.getElementById('menu').style.bottom= "70px";
        document.getElementById('menu').style.left= "50%";
        document.getElementById('menu').style.opacity= "1";
        
      
      }
      this.start_pos = current_pos;
    }
  }
}
</script>

<style scoped>

.menu-container {
  display: flex;
  justify-content: center;
  background-color: white; 
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, 0%);
  box-shadow: 0px 1px 1px rgba(0,0,0,0.3);
  width: 80%;
  padding-top:5px;
  padding-bottom: 5px;
  transition: .3s;
}

.icon {
  color: #f0f0f0;
  margin-bottom: 5px;
}

.twitter {
  color: #606060;
}

.title {
  font-size: 10px;
  color: #606060;
}

.menu-item{
  width: 50%;
  border-right: 1px solid #f0f0f0;
  text-align: center;
}

</style>
