<template>
  <div class="detail-center">
    <img :src="imgUrl" alt="" >
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailCenter',
  props: {
    imgUrl: {
      type: String,
      default: '',
      require: true

    }
  },
  methods: {
    changeMask (scale) {
      this.$refs.mask.style.opacity = scale
    }
  }
}
</script>

<style scoped lang="scss">
  .detail-center{
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;

    img{
      width: 100%;
      position: relative;
    }
    .mask{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #000;
    }
  }
</style>
