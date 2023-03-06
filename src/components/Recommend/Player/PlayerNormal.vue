<template>
<div class="player-normal">
  <player-header></player-header>
  <player-lyrics></player-lyrics>
  <player-bottom></player-bottom>
</div>
</template>

<script>
import PlayerHeader from '@/components/Recommend/Player/PlayerHeader.vue'
import PlayerLyrics from '@/components/Recommend/Player/PlayerLyrics.vue'
import PlayerBottom from '@/components/Recommend/Player/PlayerBottom.vue'
export default {
  name: 'PlayerNormal',
  components: {
    PlayerHeader,
    PlayerLyrics,
    PlayerBottom
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
