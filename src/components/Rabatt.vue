<template>
  <div class="BetAlt">
  </div>
</template>


<script>
export default {
  data() {
    return {
      fakturaData: {
        fFirstname: "",

        fAdress: ''
      },

      setFirstName(name) {
        this.fakturaData.ffirstName = name;
      },

      setFAdress(adress) {
        this.fakturaData.fAdress = adress;
      }
    };
  }
}
</script>
