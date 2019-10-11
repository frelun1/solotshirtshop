<template>
  <div class="TextConfig">
  </div>
</template>


<script>
export default {
  data() {
    return {
      textConfig: {
        TPreText: "",
        TTextSize: {},
        TTextColor: "",
        TTextStyle: "",
        TTextFont: "",
        TMyText: "",
      },
      setTPreText(pretext) {
        this.textConfig.TPreText = pretext;
      },
      setTTextSize(size) {
        this.textConfig.TTextSize = size;
      },
      setTTextColor(color) {
        this.textConfig.TTextColor = color;
      },
      setTTextStyle(style) {
        this.textConfig.TTextStyle = style;
      },
      setTTextFont(font) {
        this.textConfig.TTextFont = font;
      },
      setTMyText(myText) {
        this.textConfig.TMyText = myText;
      }, 
    };
  }
}
</script>
