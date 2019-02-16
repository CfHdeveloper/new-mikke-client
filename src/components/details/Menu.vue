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

        if(userKeepId && !userKeepId.match(String(this.circleId))){
            //ブラウザにすでにuserKeepIdが保存されていて、かつこのページのIdは保存されていない
            localStorage.setItem("user", userKeepId + this.circleId);

        }else if(!userKeepId){
            //ブラウザにuserKeepIdが保存されていない
            localStorage.setItem("user", this.circleId);

        }else{

            var userKeepIdDel = userKeepId.replace(String(this.circleId),"");
            localStorage.setItem("user", userKeepIdDel);

        }
    }
  }
}
</script>

<style scoped>

</style>
