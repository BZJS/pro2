<template>
    <transition :css="false" @enter="enter" @leave="leave">
      <div class="player-mini" v-show="this.isShowMiniState">
        <div class="play-block">
          <div class="mini-logo"><img src="https://p1.music.126.net/2wWMSriSSjCzfbEDa2mfYQ==/109951168388166891.jpg" alt="">
          </div>
          <div class="mini-information" @click.stop="openNormal">
            <h2>
              {{isCurrentSong.name}}
            </h2>
            <p>{{isCurrentSong.singer}}</p>

          </div>
          <div class="mini-star" @click="playing" ref="miniStar" ></div>
          <div class="mini-list" @click.stop="changeListState"></div>
        </div>
      </div>

    </transition>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'PlayerMini',
  data: function () {
    return {
      miniState: false
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniState',
      'isPlaying',
      'isCurrentSong'
    ])
  },
  methods: {
    ...mapActions([
      'setNormalState',
      'setMiniState',
      'setIsPlaying'
    ]),
    changeListState () {
      this.$emit('changeListState')
    },
    openNormal () {
      this.setNormalState(true)
      this.setMiniState(false)
    },
    enter (el, done) {
      Velocity(el, 'transition.bounceUpIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.bounceUpOut', { duration: 500 }, function () {
        done()
      })
    },
    playing () {
      this.setIsPlaying(!this.isPlaying)
    }

  },

  watch: {
    isPlaying (newVal, oldVal) {
      if (newVal) {
        this.$refs.miniStar.classList.add('active')
      } else {
        this.$refs.miniStar.classList.remove('active')
      }
    }
  }
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

  background-color: pink;
  height: 100px;
  z-index: 99;
  padding: 10px 20px;
  .play-block{
    display: flex;
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
      &.active{
        @include bg_img('../../../assets/images/pause');
      }
    }
    .mini-list{

      @include bg_img('../../../assets/images/list');
    }
  }

}
</style>
