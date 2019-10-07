<template>
  <div class="webshopComponent">
    <h1>webshop</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      webshopData: {
        valdTShirt: "",
      },

      setTShirt(tShirt) {
        this.webshopData.valdTShirt = tShirt;
      }
    };
  }
}
</script>