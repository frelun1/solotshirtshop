<template>
  <div class="tShirtConfig">
  </div>
</template>



<script>
export default {
  data() {
    return {
      tShirt: {
        size: 'S',
        farg: 'Vit',
        side: '',
        fabric: '',
        modell:''
      },

      setSize(size) {
        this.tShirt.size = size;
      },
      setFarg(farg){
        this.tShirt.farg = farg;
      },
      setSide(Side){
        this.tShirt.side = Side;
      },
      setFabric(Fabric){
        this.tShirt.fabric = Fabric;
      },
      setModell(Modell){
        this.tShirt.modell = Modell;
      }
    };
  }
};
</script>