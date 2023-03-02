<template>
  <div id="app">
  <Header :title="'音乐'"></Header>
    <tab-bar></tab-bar>
    <router-view></router-view>
    <player-model></player-model>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import TabBar from '@/components/TabBar.vue'
import PlayerModel from '@/components/Recommend/Player/PlayerModel.vue'
export default {
  name: 'App',
  data: function () {
    return {

    }
  },
  methods: {

  },
  components: {
    Header,
    TabBar,
    PlayerModel
  }

}
</script>
<style>

</style>
