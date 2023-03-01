<template>
<!--  手动划拉上去跟图片的放大缩小，且之后的切换效果-->
  <div class="detail">
  <Header :title="detailList.name"></Header>
    <detail-center ref="top" :img-url="detailList.coverImgUrl"></detail-center>
    <div class="bottom">
      <iscroll-view ref="scrollView">
        <detail-bottom :detailItem="detailList.tracks"></detail-bottom>
      </iscroll-view>
    </div>
  </div>
</template>

<script>

import Header from '../Header.vue'
import DetailCenter from '@/components/Recommend/Detail/DetailCenter.vue'
import DetailBottom from '@/components/Recommend/Detail/DetailBottom.vue'
import iscrollView from '@/components/iscrollView.vue'

import { getDetail, getALnum } from '@/api'

export default {
  name: 'Detail',
  created () {
    if (this.$route.params.type === 'personalized') {
      getDetail({ id: this.$route.params.id }).then((data) => {
        this.detailList = data.playlist
      }).catch((error) => {
        console.log(error)
      })
    } else if (this.$route.params.type === 'alnum') {
      getALnum({ id: this.$route.params.id }).then((data) => {
        this.detailList = {
        // 统一格式
          name: data.album.name,
          coverImgUrl: data.album.picUrl,
          tracks: data.songs
        }
      })
    }
  },
  components: {
    Header,
    DetailCenter,
    iscrollView,
    DetailBottom

  },
  data: function () {
    return {
      detailList: {}
    }
  },
  mounted () {
    const defaultHeight = this.$refs.top.$el.offsetHeight
    this.$refs.scrollView.scrolling((offsetY) => {
      if (offsetY < 0) {
        const scale = Math.abs(offsetY) / defaultHeight
        this.$refs.top.changeMask(scale)
      } else {
        const scale = 1 + offsetY / defaultHeight
        this.$refs.top.$el.style.transform = `scale(${scale})`
      }
    })
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
.bottom{
  position: fixed;
  top: 500px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
