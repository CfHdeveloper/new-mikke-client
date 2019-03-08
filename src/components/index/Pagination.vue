<template>
  <div class="pagination-contatiner">
      <div class="page-btn" v-for="n in circleCount" :key="n" @click="goNextPagination(n)">{{n}}</div>  
  </div>
</template>

<script>
export default {
  props: [
    "circleCount"
  ],

  mounted(){
    document.getElementsByClassName('page-btn')[0].classList.add('active');
  },
  methods: {
    goNextPagination(n){
      var targetElements = document.getElementsByClassName('page-btn');
    	[].forEach.call(targetElements, function(elem) {
        elem.classList.remove('active');
      })
      document.getElementsByClassName('page-btn')[n-1].classList.add('active')
      this.$emit('pagination-clicked', n)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination-contatiner {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 60px;

    .page-btn {
      width: 50px;
      height: 50px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      border:2px solid orange;
      background-color: white;
      color: orange;
      cursor: pointer;
      margin-right: 10px;
    }

    .active {
      background-color: orange;
      color: white;
    }
  }
</style>
