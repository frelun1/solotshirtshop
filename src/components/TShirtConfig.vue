<template>
  <div class="tShirtConfig">
  </div>
</template>



<script>
export default {
  data() {
    return {
      tShirt: {
        size: ''
      },

      setSize(size) {
        this.tShirt.size = size;
      }
    };
  }
};
</script>