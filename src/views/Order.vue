<template>
  <div class="order">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Order from '@/components/Order.vue'

export default {
  name: 'order',
  components: {
    Order
  }
}
</script>
