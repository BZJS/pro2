<template>
    <div class="player">
      <PlayerNormal></PlayerNormal>
      <PlayerMini></PlayerMini>
      <list-player></list-player>
    </div>
</template>

<script>
import PlayerNormal from '@/components/Recommend/Player/PlayerNormal.vue'
import PlayerMini from '@/components/Recommend/Player/PlayerMini.vue'
import ListPlayer from '@/components/Recommend/Player/ListPlayer.vue'
export default {
  name: 'Player',
  components: {
    PlayerNormal,
    PlayerMini,
    ListPlayer
  }
}
</script>

<style scoped>

</style>
