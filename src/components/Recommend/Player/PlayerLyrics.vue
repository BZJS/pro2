<template>

      <swiper :options="swiperOption" class="cd">
        <swiper-slide class="song-introduction">
         <div class="introduction-img" >
           <img :src="isCurrentSong.picUrl" alt="">
         </div>
          <p>{{firstLyric()}}</p>

        </swiper-slide>
        <swiper-slide class="lyrics-list">
          <iscroll-view>
            <ul>
              <li v-for="(item,index) in isLyrics" :key="index">{{item}}</li>

            </ul>
          </iscroll-view>
        </swiper-slide>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import iscrollView from '@/components/iscrollView.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'PlayerLyrics',
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'

        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true

      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    iscrollView
  },
  computed: {
    ...mapGetters([
      'isCurrentSong',
      'isLyrics'
    ])
  },
  methods: {
    firstLyric () {
      for (const key in this.isLyrics) {
        return this.isLyrics[key]
      }
    }
  }
}
</script>

<style scoped lang="scss">

  .cd{
   position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 200px;
    padding-bottom: 40px;

    .song-introduction{
      //width: 100%;
      .introduction-img{
        width: 80%;
      //height: 80%;
        border: 30px solid #fff;
        border-radius: 50%;
        overflow: hidden;
         margin: 20px auto;
        animation: strap 3s linear infinite;
        img{
          width: 100%;
          height: 100%;
        }
      }
      p{
        text-align: center;
      }
    }
    .lyrics-list{
      width: 100%;
      height: 100%;
      overflow: hidden;
      ul{
        display: flex;
        flex-direction: column;
        li{
          padding: 10px 20px;
          text-align: center;

        }

      }
    }
      .swiper-pagination{
        bottom: 20px;
      }
  }
  @keyframes strap {
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }

  }
</style>
<style lang="scss">

@import "../../../assets/css/mixin";
.my-bullet{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #fff;
  margin: 0 20px;
}
.my-bullet-active{
  width: 60px;
  @include bg_color();
}
</style>
