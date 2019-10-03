<template>
  <div class="tShirtConfig">
    <h1></h1>
  </div>
</template>



<script>
export default {
  data() {
    return {
      tShirt: {
        size: ""
      },

      setSize(size) {
        this.tShirt.size = size;
      }
    };
  }
};
</script>