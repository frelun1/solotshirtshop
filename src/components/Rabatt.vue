<template>
  <div class="Rabatt">
  </div>
</template>


<script>
export default {
  data() {
    return {
      rabatt: {
        DiscountCode: ''
      },

      setDiscountCode(rabatt) {
        this.rabatt.DiscountCode = rabatt;
      }

    };
  }
}
</script>
