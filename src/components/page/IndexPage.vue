<template>
  <div>
    <div class="mode-tab">
      <div @click="changeMode('index')">
        <p>サークル一覧</p>
      </div>
      <div @click="changeMode('like')">
        <p>お気に入り</p>
      </div>
      <index v-if="mode=='index'"/>
      <like v-if="mode=='like'"/>  
    </div>
  </div>
</template>

<script>
import Index from '@/components/index/Index';
import Like from '@/components/index/Like';
export default {
  data(){
    return {
      mode: ""
    }
  },
  methods: {
    changeMode(mode){
      this.mode = mode
    }
  },
  components: {
      'index': Index,
      'like': Like
  }
}
</script>

<style scoped>

</style>
