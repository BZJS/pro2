<template>
    <div class="player">
      <PlayerNormal></PlayerNormal>
      <PlayerMini></PlayerMini>
    </div>
</template>

<script>
import PlayerNormal from '@/components/Recommend/Player/PlayerNormal.vue'
import PlayerMini from '@/components/Recommend/Player/PlayerMini.vue'
export default {
  name: 'Player',
  components: {
    PlayerNormal,
    PlayerMini
  }
}
</script>

<style scoped>

</style>
