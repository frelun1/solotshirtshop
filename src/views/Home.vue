<template>
  <div class="home">
    <Webshop /> 

    <img alt="Vue logo" src="https://omfgdogs.com/omfgdogs@2X.gif" style="height: 100px;">
    <HelloWorld msg="TnT T-Shirt Shop!"/>

    <video controls="" autoplay="" src="https://omfgdogs.com/omfgdogs.mp3" type="audio/mp3" style="height: 50px;"></video>

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
