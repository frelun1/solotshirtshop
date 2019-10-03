<template>
  <div class="home">
    <img alt="Vue logo" src="https://nummerlappar.se/wp-content/uploads/2017/05/All-about-T-Shirt.jpg">
    <HelloWorld msg="Welcome to TnT T-Shirt shop!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
