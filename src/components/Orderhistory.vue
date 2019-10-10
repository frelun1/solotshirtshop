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
        CName: '',
        CLastName: '',
        CAdress: {
          street: '',
          zip: '',
          city: '',
          Country:'',
        },
        Payment: '',
        Price: '',
        OrderDate: '',
        Delivery: '',
        CNumber: '',
        UName: '',
        UAdress:{
          street: '',
          zip: '',
          city: '',
          Country:'',
        },
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