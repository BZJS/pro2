<template>
<div class="banner">
  <swiper :options="swiperOption" ref="mySwiper" v-if="banners.length>0">
    <swiper-slide v-for="value in banners" :key="value.bannerId">
      <a :href="value.url">
        <img :src="value.pic" alt="">

      </a>
    </swiper-slide>

  </swiper>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
export default {
  name: 'Banner',
  updated () {
    console.log(this.banners)
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
        //
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
      required: true
    }
  }

}
</script>

<style scoped>

</style>
