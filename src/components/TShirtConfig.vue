<template>
  <div class="tShirtConfig">
  </div>
</template>



<script>
export default {
  data() {
    return {
      tShirt: {
        size: '',
        farg: 'Vit'
      },

      setSize(size) {
        this.tShirt.size = size;
      },
      setFarg(farg){
        this.tShirt.farg = farg;
      }
    };
  }
};
</script>