<template>
  <div class="orderHistory">
    <h1></h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      
      orderHistory: {
        First:{ 
        OrderNumber: '123456789',

        firstName: "Ben",

        tShirt: 'This is a T-Shirt'
        },
       
      },

      seOldOrder(Num) {
        this.orderHistory.First.OrderNumber = Num;
      },
    };
  }
}
</script>