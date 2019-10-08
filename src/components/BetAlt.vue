<template>
  <div class="BetAlt">
  </div>
</template>


<script>
export default {
  data() {
    return {
      fakturaData: {
        FFirstname: "",

        FAdress: {}
      },

      setFFirstName(name) {
        this.fakturaData.FFirstName = name;
      },

      setFAdress(adress) {
        this.fakturaData.FAdress = adress;
      }
    };
  }
}
</script>
