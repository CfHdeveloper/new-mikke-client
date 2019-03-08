<template>
  <div class="index">
    <circle-card v-for="item in items" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import CircleCard from '@/components/index/CircleCard'
export default {
  props: [
    "items"
  ],
  components: {
    "circle-card": CircleCard
  }
  
}
</script>

<style scoped lang="scss">

  .index {
    display: grid;
    grid-template-rows: 300px;
    grid-template-columns: 1fr;
    margin: 0 auto;
    padding: 60px 0 90px;
    grid-gap: 1rem;

    @media screen and (min-width: 780px){

      max-width: 960px;
      margin: 0 auto;

      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;

      padding: 163px 0 60px;
      
    }
  }


</style>