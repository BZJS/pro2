<template>
<!--  手动划拉上去跟图片的放大缩小，且之后的切换效果-->
  <div class="detail">
  <Header :title="detailList.name"></Header>
    <detail-center :img-url="detailList.coverImgUrl"></detail-center>
    <detail-bottom :detail-item="detailList.tracks"></detail-bottom>
  </div>
</template>

<script>

import Header from '../Header.vue'
import DetailCenter from '@/components/Recommend/Detail/DetailCenter.vue'
import DetailBottom from '@/components/Recommend/Detail/DetailBottom.vue'

import { getDetail } from '@/api'

export default {
  name: 'Detail',
  created () {
    getDetail({ id: this.$route.params.id }).then((data) => {
      this.detailList = data.playlist
    }).catch((error) => {
      console.log(error)
    })
  },
  components: {
    Header,
    DetailCenter,
    DetailBottom

  },
  data: function () {
    return {
      detailList: {}
    }
  }

}
</script>

<style scoped lang="scss">
.detail{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
}
</style>
