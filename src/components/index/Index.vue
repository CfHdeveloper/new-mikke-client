<template>
  <div>
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

</style>