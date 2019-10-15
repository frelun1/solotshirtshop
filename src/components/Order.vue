<template>
  <div class="orderComponent">
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      orderData: {
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
        tShirt: '',
        numberOf: ''
      },

      setFirstName(name) {
        this.orderData.CName = name;
      },

      setTShirt(tShirt) {
        this.orderData.tShirt = tShirt;
      },
       setLastName(CLastName) {
        this.orderData.CLastName = CLastName;
      },
       setCAdress(street,zip,city,Country) {
        this.orderData.CAdress.street = street;
        this.orderData.CAdress.zip = zip;
        this.orderData.CAdress.city = city;
        this.orderData.CAdress.Country = Country;
      },
       setPayment(Payment) {
        this.orderData.Payment = Payment;
      },
      setPrice(Price) {
        this.orderData.Price = Price;
      },
       setOrderDate(OrderDate) {
        this.orderData.OrderDate = OrderDate;
      },
      setOrderNumber(OrderNumber) {
        this.orderData.OrderNumber = OrderNumber;
      },
       setDelivery(Delivery) {
        this.orderData.Delivery = Delivery;
      },
        setCNumber(CNumber) {
        this.orderData.CNumber = CNumber;
      },
        setUName(UName) {
        this.orderData.UName = UName;
      },
        setUAdress(street,zip,city,Country) {
        this.orderData.UAdress.street = street;
        this.orderData.UAdress.zip = zip;
        this.orderData.UAdress.city = city;
        this.orderData.UAdress.Country = Country;
      },
      setNumberOf(Num){
        this.orderData.numberOf = Num;
      }

    };
  }
}
</script>
