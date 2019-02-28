<template>
  <div class="page">
    <div class="header">その他</div>
    <div class="others-container">
      <div class="el" @click="goToLink(0)">
        <img src="@/assets/oulife.png" class="img">
        <p class="title">Oulife</p>
      </div>
      <div class="el" @click="goToLink(1)">
        <p class="title">Code for Handai</p>
      </div>
      <div class="el" @click="goToLink(2)">
        <img src="@/assets/mail.png" class="img">
        <p class="title">お問い合わせ</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    goToLink(linkNum){

      var linkArray = ['http://oulife.jp','https://twitter.com/CodeforHandai?lang=ja','https://goo.gl/forms/we21tQNYIlXLyhnu1'];
      window.open(linkArray[linkNum]);

    }
  }
  
}
</script>


<style scoped lang="scss">

.page {

  background-color: #f6f6f6;
  min-height: 100vh;
  padding: 20px;

  .header {
    width: 100%;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #c0c0c0;
    background-color: #ffffff;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 50;

    @media screen and (min-width: 780px){
      display: none;
    }
  }

  .others-container {

    display: grid;
    grid-template-rows: 30vw;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    padding: 60px 0;
    grid-gap: 1rem;

    .el {

      background-color: #ffffff;
      padding: 10px;

      display: flex;
      position: relative;
      justify-content: center;



      .img {
        width: 90%;
        align-self: center;
      }

      .icon {
        font-size: 30px;
      }

      .title {
        font-size: 13px;
        position: absolute;
        bottom: 10px;
      }

    }
  }

}

</style>
