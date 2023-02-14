<template>
  <div class="header" @click="changeColor">
    <div class="header-left"></div>
    <div class="header-center">音乐</div>
    <div class="header-rigth"></div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data: function () {
    return {
      theme: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },

  methods: {
    changeColor () {
      this.index++
      if (this.index > this.theme.length - 1) this.index = 0
      document.documentElement.setAttribute('data-theme', this.theme[this.index])
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
  .header{
    display: flex;
    height: 60px;
    @include font_size($font_medium);
    @include bg_color();
    .header-left{
      width: 60px;
      height: 100%;
      @include bg_img('../assets/images/back')

    }
    .header-center{
      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 60px;
    }
    .header-rigth{
      width: 60px;
      height: 100%;
      @include bg_img('../assets/images/more')
    }
  }
</style>
