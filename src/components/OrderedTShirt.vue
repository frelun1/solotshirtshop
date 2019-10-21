<template>
  <div class="OrderedTShirt">
    <h1></h1>
  </div>
</template>

<script>
export default {
    data() {
      return {
       OrderedTShirt: {
        Id: '',
        Storlek: '',
        Färg: '',
        Model: '',
        Material: '',
        Tryck: '',
        Pris: ''
    },

    setId(Id) {
     this.OrderedTShirt.Id = Id
    },

    setStorlek(Storlek){
      this.OrderedTShirt.Storlek = Storlek
    },

    setFärg(Färg){
      this.OrderedTShirt.Färg = Färg
    },

    setModel(Model){
      this.OrderedTShirt.Model = Model
    },

    setMaterial(Material){
      this.OrderedTShirt.Material = Material
    },

    setTryck(Tryck){
      this.OrderedTShirt.Tryck = Tryck
    },

    setPris(Pris){
      this.OrderedTShirt.Pris = Pris
    }

    };
  }
}
</script>