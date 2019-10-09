<template>
  <div class="BetAltKredit">
  </div>
</template>


<script>
export default {
  data() {
    return {
      kortData: {
        CFirstname: "",
        CLastName: '',
        CBetAlt: '',
        CAdress: {},
        CCardNumber: '',
        CCardCCV: '',
        CCardDate: '',

      },

      setCFirstName(firstName) {
        this.kortData.CFirstName = firstName;
      },

      setCLastName(lastName){
        this.kortData.CLastName = lastName;
      },

      setCCardNumber(cardNumber) {
        this.kortData.CCardNumber = cardNumber;
      },
      setCCcv(cardCCV) {
        this.kortData.CCardCCV = cardCCV;
      },
      setCDate(cardDate) {
        this.kortData.CCardDate = cardDate;
      },
      setCAdress(adress) {
        this.kortData.CAdress = adress;
      },
      setCBetAlt(faktura){
        this.kortData.CBetAlt = faktura;
      }
    
    };
  }
}
</script>
