<template>
  <div class="tabbar">
    <router-link tag="div" class="taber-item" to="/recommend">推荐</router-link>
    <router-link tag="div" class="taber-item" to="/singer">歌手</router-link>
    <router-link tag="div" class="taber-item" to="/rank">排名</router-link>
    <router-link tag="div" class="taber-item" to="/search">搜索</router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped lang="scss">
.tabbar{
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  display: flex;
  .taber-item{
  width: 25%;

  }
}
</style>
