<template>
  <div>
    <button @click="addLike">Like</button>
  </div>
</template>

<script>
export default {
  props: [
    "circleId"
  ],
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
    }
  }
}
</script>

<style scoped>

</style>
