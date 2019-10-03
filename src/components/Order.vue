<template>
  <div class="orderComponent">
    <h1>test</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      orderData: {
        firstName: "",

        tShirt: {}
      },

      setFirstName(name) {
        this.orderData.firstName = name;
      },

      setTShirt(tShirt) {
        this.orderData.tShirt = tShirt;
      }
    };
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
