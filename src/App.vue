<template>
  <div id="app">
  <Header :title="'音乐'"></Header>
    <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import TabBar from '@/components/TabBar.vue'
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
    TabBar
  }

}
</script>
<style>

</style>
