<template>
    <div class="player-bottom">
      <div class="scroll-bar">
        <span class="scroll-bar-star-time">0:00</span>
        <div class="scroll-bar-content">
          <div class="scroll-bar-internal"></div>
        </div>
        <span class="scroll-bar-end-time">0:00</span>
      </div>
      <div class="btn-list">
        <div class="mode one"></div>
        <div class="prev"></div>
        <div class="play" @click.stop="playing" ref="play"></div>
        <div class="next"></div>
        <div class="favorite"></div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PlayerBottom',
  computed: {
    ...mapGetters([
      'isPlaying'
    ])

  },
  data: function () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'setIsPlaying'
    ]),
    playing () {
      this.setIsPlaying(!this.isPlaying)
    }
  },
  watch: {
    isPlaying (newVal, oldVal) {
      if (newVal) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    }
  },
  mounted () {
    console.log(this.isPlaying)
  }

}
</script>

<style scoped lang="scss">
@import "../../../assets/css/variable";
@import "../../../assets/css/mixin";
.player-bottom{

  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  .scroll-bar{
    display: flex;
    align-content: center;

    .scroll-bar-star-time{
    width: 20%;
      text-align: center;
    }
    .scroll-bar-content{
      flex: 1;
      height: 20px;
      background-color: #fff;
      border-radius: 10px;
      .scroll-bar-internal{
        width: 50%;
        height: 100%;
        background-color: yellow;
      }

    }
    .scroll-bar-end-time{
      width: 20%;
      text-align: center;
    }

  }
  .btn-list{
    display: flex;
    justify-content: space-around;
    div{
      width: 84px;
      height: 84px;
    }
    .mode{
      &.loop{
        @include bg_img('../../../assets/images/loop');
      }
      &.one{
        @include bg_img('../../../assets/images/one');
      }
      &.random{
        @include bg_img('../../../assets/images/shuffle');
      }
    }
    .prev{
      @include bg_img('../../../assets/images/prev')
    }
    .play{
      @include bg_img('../../../assets/images/play');
      &.active{
        @include bg_img('../../../assets/images/pause');
      }
    }
    .next{
      @include bg_img('../../../assets/images/next');
    }
    .favorite{
      @include bg_img('../../../assets/images/un_favorite');
      &.active{
        @include bg_img('../../../assets/images/favorite');
      }
    }
  }
}
</style>
