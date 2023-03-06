<template>
    <div class="player-mini">
      <div class="mini-logo"><img src="https://p1.music.126.net/2wWMSriSSjCzfbEDa2mfYQ==/109951168388166891.jpg" alt="">
      </div>
      <div class="mini-information">
        <h2>
          My Stupid Heart (with Lauv)
        </h2>
        <p>Walk off the Earth-Lauv</p>

      </div>
      <div class="mini-star"></div>
      <div class="mini-list"></div>
    </div>

</template>

<script>
export default {
  name: 'PlayerMini'
}
</script>

<style scoped lang="scss">
@import "../../../assets/css/variable";
@import "../../../assets/css/mixin";
.player-mini{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  background-color: pink;
  height: 100px;
  z-index: 99;
  padding: 10px 20px;
  .mini-logo{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .mini-information{
    flex: 1;
    padding-left: 10px;
    color: gray;
  }
  .mini-star,.mini-list{
    width: 80px;
    height: 80px;
  }
  .mini-star{
    @include bg_img('../../../assets/images/play');
  }
  .mini-list{
    //@include bg_img('../../../assets/images/list_163.png');
    @include bg_img('../../../assets/images/list');
  }
}
</style>
