<template>
  <div class="orderComponent">
    <h1></h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      orderData: {
        firstName: "Ben",

        tShirt: 'This is a T-Shirt'
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
