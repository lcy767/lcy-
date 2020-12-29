<template>
  <div id="app">
  	<header-nav></header-nav>	
  	<router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>

import headerNav from '@/components/header-nav'
import NavFooter from './components/NavFooter.vue'

export default {
  name: 'app',
  components: {
    headerNav,
    NavFooter
  }
}
</script>
    
<style>

</style>
