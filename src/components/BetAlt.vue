<template>
  <div class="BetAlt">
    <h1>test</h1>
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
