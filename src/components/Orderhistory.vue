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
        OrderNumber: '',

        firstName: '',

        tShirt: ''
        }
      
      },
      seOldOrder(Num) {
        this.orderHistory.First.OrderNumber = Num;
      },
      descOldOrder(desc){
        this.orderHistory.First.tShirt = desc;
      },
    };
  }
}
</script>