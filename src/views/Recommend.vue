<template>
<div class="recommend">
  <iscroll-view>
    <div>
      <Banner :banners="banners"></Banner>

      <personalized :personalized="personalized" :title="'推荐歌单'" @select="getMusicItem" :type="'personalized'"></personalized>
      <personalized :personalized="newAlNum" :title="'最新专辑'" @select="getMusicItem" :type="'alnum'"></personalized>

      <new-song :newSongs="newSongs"></new-song>
    </div>
  </iscroll-view>
 <transition>
   <router-view></router-view>
 </transition>

</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Personalized from '@/components/Recommend/Personalized.vue'
import NewSong from '@/components/Recommend/NewSong.vue'
import iscrollView from '@/components/iscrollView.vue'
import { getBanner, getPersonalized, getNewAlNum, getNewSong } from '@/api'
import Detail from '@/components/Recommend/Detail.vue'
export default {
  name: 'Recommend',
  computed: {
    Detail () {
      return Detail
    }
  },

  created () {
    getBanner().then((data) => {
      this.banners = data.banners
    }).catch((error) => {
      console.log(error)
    })
    getPersonalized().then((data) => {
      this.personalized = data.result
    }).catch((error) => {
      console.log(error)
    })
    getNewAlNum().then((data) => {
      this.newAlNum = data.albums
    }).catch((error) => {
      console.log(error)
    })
    getNewSong().then((data) => {
      this.newSongs = data.result
    })
  },
  data: function () {
    return {
      banners: [],
      personalized: [],
      newAlNum: [],
      newSongs: []
    }
  },
  components: {
    Banner,
    Personalized,
    NewSong,
    iscrollView
  },
  methods: {
    // 没必要，可以直接在子组件中各自的item的click上自己跳，这里push除了复习一下子组件从父组件调用方法没啥了

    getMusicItem (id, type) {
      this.$router.push(`/recommend/detail/${id}/${type}`)
    }

  }
}
</script>

<style scoped lang="scss">
.recommend{
 position: fixed;
  top: 140px;
  left: 0;
  right: 0;
  bottom:0;

}
.v-enter{
  transform: translateX(100%);
}
.v-enter-to{
  transform: translateX(0%);
}
.v-enter-active{
transition: transform 1s;
}
.v-leave{
  transform: translateX(0%);
}
.v-leave-to{
  transform: translateX(100%);
}
.v-leave-active{
  transition: transform 1s;
}
</style>
