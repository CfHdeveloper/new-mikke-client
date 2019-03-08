<template>
  <div class="footer">
    <div class="footer__container">
      <p class="comment">Powered By</p>
      <img src="@/assets/c4h_logo.svg" alt="Code for Handai" class="logo">
      <p class="copy-right">@2019 Code 4 handai All Right Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .footer {
    color: white;
    background-color: black;
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;

    &__container {
      width: 30%;
      margin: 0 auto;

      .logo {
        width: 100%;
        margin-bottom: 40px;
      }

      .comment {
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 20px;
      }

      .copy-right {
        font-size: 16px;
        letter-spacing: 1px;

        color: #e0e0e0;

      }
    }
  }

</style>
