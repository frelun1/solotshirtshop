<template>
  <div class="home">
    <Webshop /> 

    <img alt="Vue logo" src="https://nummerlappar.se/wp-content/uploads/2017/05/All-about-T-Shirt.jpg" style="height: 100px;">
    <HelloWorld msg="Welcome to TnT T-Shirt shop!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Webshop from '@/components/Webshop.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Webshop
  }
}
</script>
