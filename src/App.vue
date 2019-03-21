<template>
  <div id="app">
    <router-view/>
    <app-navigation/>
    <app-footer v-if="state.pc"/>
  </div>
</template>

<script>
import 'normalize.css'
import 'reset-css'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'

export default {
  name: 'App',
  components: {
    'app-navigation': Navigation,
    'app-footer': Footer
  },
  data(){
    return {
      state: {
        pc: true
      }
    }
  },
  created(){
    console.log(window.parent.screen.width > 780);
    if(window.parent.screen.width > 780){
      this.state.pc = true;
    }else{
      this.state.pc = false;
    }
  }
}
</script>

<style lang="scss">
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

    &:focus{
      outline: none;
    }
  }

  input[type="submit"]{
  -webkit-appearance: none;
  }
</style>
