<template>
  <div class="footer">
    <div class="footer__container">
      <img src="@/assets/oulife-c4h.svg" alt="Code for Handai" class="logo">
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
    padding-top: 56px;
    padding-bottom: 20px;
    width: 100%;

    &__container {
      width: 30%;
      margin: 0 auto;

      .logo {
        width: 80%;
        margin-bottom: 40px;
      }

      .comment {
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 20px;
      }

      .copy-right {
        font-size: 10px;
        line-height: 15px;
        letter-spacing: 1px;

        color: #e0e0e0;

      }
    }
  }

</style>
