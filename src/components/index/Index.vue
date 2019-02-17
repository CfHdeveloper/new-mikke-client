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

<style scoped>

  .index {
    display: grid;
    grid-template-rows: 300px;
    grid-template-columns: 1fr;
    margin: 0 auto;
    padding: 60px 0;
    grid-gap: 1rem;
  }


</style>