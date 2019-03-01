<template>
  <div class="menu-container" id="menu">
    <div class="menu-item" @click="shareOnTwitter">
      <p class="icon twitter"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></p>
      <p class="title">twitterで共有</p>
    </div>
    <div class="menu-item" @click="addLike">
      <p class="icon heart" id="like-icon"><font-awesome-icon icon="heart" /></p>
      <p class="title" id="like">お気に入りに追加</p>
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
  created() {

    window.addEventListener('scroll', this.handleScroll);

  },
  watch: {
    circleId(val){
      //ライクが保存されているか判断してレイアウトわけ
      const userKeepId = localStorage.getItem("user") || false;

      if(userKeepId){ //localstrangeにuserKeepIdが保存されている

        var userKeepIdArray = userKeepId.split(',');

        if(userKeepIdArray.indexOf(String(val)) >= 0){ //このページのサークルが保存されている

          this.changeToLike();

        }
      }   
    }
  },
  methods: {
    addLike(){
      //ブラウザに保存されているidを取得
      const userKeepId = localStorage.getItem("user") || false;

      if(userKeepId){ //localstrangeにuserKeepIdが保存されている

        var userKeepIdArray = userKeepId.split(',');

        if(userKeepIdArray.indexOf(String(this.circleId)) == -1){ //このページのサークルは保存されていない
          localStorage.setItem("user", userKeepId + ',' +this.circleId);
          this.changeToLike();

        }else{ //このページのサークルが保存されている

          if(userKeepIdArray.length　== 1){ //お気に入りが一つしか保存されていない（削除すると0件になる場合）

            localStorage.removeItem("user");
            this.changeToDislike();

          }else{
            
            //一度配列化してから要素を削除
            var userKeepIdDel = userKeepIdArray.filter(n => n !== String(this.circleId)).join(',');
            localStorage.setItem("user", userKeepIdDel);
            this.changeToDislike();
          }
        }
      }else{ //localStrangeにuserKeepIdが保存されていない

        localStorage.setItem("user", this.circleId);
        this.changeToLike();
        
      }
    },
    shareOnTwitter(){
      console.log('shareontwitter');
      var url = `http://twitter.com/intent/tweet?url=${location.href}&text=このサークルオススメ！サークルみっけでお気に入り見つけました！&hashtags=サークルミッケ`;
      window.open(url);
    },
    handleScroll() {

      //pc版の時は無視
      if(screen.width >= 780){
        return;
      }

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var current_pos =scrollTop;

      if (current_pos > this.start_pos) {
        //down
        document.getElementById('menu').style.bottom= "-90px";
        document.getElementById('menu').style.left= "50%";
        document.getElementById('menu').style.opacity= "0";
      }else{
        //up
        document.getElementById('menu').style.bottom= "90px";
        document.getElementById('menu').style.left= "50%";
        document.getElementById('menu').style.opacity= "1";
        
      
      }
      this.start_pos = current_pos;
    },
    changeToLike(){
      document.getElementById('like').innerText = 'お気に入りを解除'
      document.getElementById('like').style.color = 'orange'
      document.getElementById('like-icon').style.color = 'orange'
    },
    changeToDislike(){
      document.getElementById('like').innerText = 'お気に入りに追加'
      document.getElementById('like').style.color = '#606060'
      document.getElementById('like-icon').style.color = '#f0f0f0'
    }
  },

  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="scss">

.menu-container {

  @media screen and (min-width: 780px){
    
    width: 100%;
    transition: .3s;

    display: flex;

    border: 1px solid #606060;

    margin-top: 60px;
  }

  @media screen and (max-width: 779px){
    display: flex;

    position: fixed;
    left: 50%;
    bottom: 90px;
    transform: translate(-50%, 0%);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.3);
    width: 80%;
    padding-top:5px;
    padding-bottom: 5px;
    transition: .3s;

    background-color: #ffffff;
    
  }
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
  padding-top:5px;
  padding-bottom: 5px;

  cursor: pointer;

  @media screen and (min-width: 780px){
    &:first-child {
      border-right: 1px solid #606060;
    }
  }

}

</style>
