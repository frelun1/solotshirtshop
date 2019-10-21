<template>
  <div class="BetAltFaktura">
  </div>
</template>


<script>
export default {
  data() {
    return {
      fakturaData: {
        FFirstname: "",
        FLastName: '',
        FBetAlt: '',
        FAdress: {}
      },

      setFFirstName(firstName) {
        this.fakturaData.FFirstName = firstName;
      },

      setFLastName(lastName){
        this.fakturaData.FLastName = lastName;
      },

      setFAdress(adress) {
        this.fakturaData.FAdress = adress;
      },

      setFBetAlt(faktura){
        this.fakturaData.FBetAlt = faktura;
      }
    };
  }
}
</script>
