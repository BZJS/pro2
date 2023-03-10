<template>
<div class="new-song">
  <div class="new-song-title">推荐音乐</div>
  <div class="new-song-area">
    <div class="new-song-item" v-for="value in newSongs" :key="value.id" @click.stop="openNormal">
      <img v-lazy="value.picUrl" alt="">
      <div class="song-name">{{value.name}}</div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewSong',
  data: function () {
    return {

    }
  },
  props: {
    newSongs: {
      type: [],
      default: () => [],
      require: true
    }
  },
  methods: {
    ...mapActions([
      'setNormalState',
      'setMiniState'
    ]),
    openNormal () {
      this.setNormalState(true)
      this.setMiniState(false)
    }
  }

}
</script>

<style scoped lang="scss">
    .new-song{
      width: 100%;
      .new-song-title{
        height: 84px;
        line-height: 84px;
        width: 100%;
      }
      .new-song-area{
        width: 100%;
        .new-song-item{
          display: flex;
          height: 84px;
          width: 100%;
          margin: 3px 0;
          border-bottom:1px solid #dac7c7;

          img{
            width: 80px;
            height: 100%;

          }
          .song-name{
            flex: 1;
            line-height: 84px;
            margin-left: 10px;
          }
        }
      }
    }
</style>
