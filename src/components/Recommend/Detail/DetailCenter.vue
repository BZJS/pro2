<template>
  <div class="detail-center">
    <img :src="imgUrl" alt="">
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
  }
</style>
