<template>
  <transition @enter="enter" @leave="leave" :css="false">
    <div class="player-normal" v-show="this.isShowNormalState">
      <player-header></player-header>
      <player-lyrics></player-lyrics>
      <player-bottom></player-bottom>
    </div>
  </transition>
</template>

<script>
import PlayerHeader from '@/components/Recommend/Player/PlayerHeader.vue'
import PlayerLyrics from '@/components/Recommend/Player/PlayerLyrics.vue'
import PlayerBottom from '@/components/Recommend/Player/PlayerBottom.vue'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
import { mapGetters } from 'vuex'
export default {
  name: 'PlayerNormal',
  components: {
    PlayerHeader,
    PlayerLyrics,
    PlayerBottom
  },
  computed: {
    ...mapGetters([
      'isShowNormalState'
    ])
  },
  methods: {
    enter (el, done) {
      Velocity(el, 'transition.shrinkIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.shrinkOut', { duration: 500 }, function () {
        done()
      })
    }

  }
}
</script>

<style scoped lang="scss">
  .player-normal{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99;
    background-color: coral;
  }
</style>
