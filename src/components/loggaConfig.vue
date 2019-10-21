<template>
  <div class="LoggaConfig">
  </div>
</template>


<script>
export default {
  data() {
    return {
      loggaConfig: {
        LMyPic: "PIC URL",

        LPicSize: {},

        LPrePic: "PIC URL/id",

        LPrePicSize: {},

      },

      setLMyPic(pic) {
        this.loggaConfig.LMyPic = pic;
      },

      setLPicSize(size) {
        this.loggaConfig.LPicSize = size;
      },

      setLPrePic(PrePic) {
        this.loggaConfig.LPrePic = PrePic;
      },

      setLPrePicSize(PrePicSize) {
        this.loggaConfig.LPrePicSize = PrePicSize;
      },

    };
  }
}
</script>
