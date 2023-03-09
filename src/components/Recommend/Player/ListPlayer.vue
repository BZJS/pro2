<template>
    <div class="list-player" v-if="listState">
       <div class="list-top">
         <div class="state-left"></div>
         <div class="state-text">顺序播放</div>
         <div class="state-del"></div>
       </div>
      <div class="list-center">
        <div class="music-active"></div>
        <div class="music-text">My music</div>
        <div class="music-change">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="list-change" @click.stop="hidden">关闭</div>

    </div>
</template>

<script>
export default {
  name: 'ListPlayer',
  data: function () {
    return {
      listState: false
    }
  },
  methods: {
    hidden () {
      this.listState = !this.listState
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/css/variable";
@import "../../../assets/css/mixin";
.list-player{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  //top: 350px;
  z-index: 100;
  background-color: #fff;
  .list-top{
    height: 100px;
    display: flex;
    padding: 8px 6px;
    align-items: center;
    border: 1px solid gray;
    .state-left{
      width: 56px;
      height: 56px;
      @include bg_img('../../../assets/images/small_loop')
    }
    .state-text{
      line-height: 100px;
      flex: 1;
    }
    .state-del{
      width: 56px;
      height: 56px;
      @include bg_img('../../../assets/images/small_del')
    }

  }
  .list-center{
    display: flex;
    align-items: center;
    margin: 8px 6px;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    .music-active{
      width: 56px;
      height: 56px;
      @include bg_img('../../../assets/images/small_play')
    }
    .music-text{
      flex: 1;
    }
    .music-change{
      display: flex;

      span:nth-child(1){
        width: 56px;
        height: 56px;
        @include bg_img('../../../assets/images/small_un_favorite');
        margin: 0 8px;
      }
      span:nth-child(2){
        width: 56px;
        height: 56px;
        @include bg_img('../../../assets/images/small_close');
      }
    }
  }
  .list-change{
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: red;
    color: #fff;
  }
}
</style>
