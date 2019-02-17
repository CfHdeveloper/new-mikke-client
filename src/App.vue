<template>
  <div id="app">
    <router-view/>
    <app-navigation/>
  </div>
</template>

<script>
import 'normalize.css'
import 'reset-css'
import Navigation from '@/components/global/Navigation'

export default {
  name: 'App',
  components: {
    'app-navigation': Navigation
  }
}
</script>

<style>
  #app {
    font-family: 'dnp-shuei-gothic-kin-std', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;  
    height: 100%;
  }

  body {
    min-height: 100vh;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
</style>
