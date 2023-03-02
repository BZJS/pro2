<template>
  <div class="player-model">
        <div class="player-header">
          <div class="header-top">停驻</div>
          <div class="header-bottom">黄礼格</div>
        </div>
    <div class="player-middle">
      <swiper :options="swiperOption" ref="cdSwiper" class="cd-swiper">
        <!-- slides -->
        <swiper-slide class="cd-swiper-slide"><div class="slider-item1">
          <img src="https://p2.music.126.net/cyfoMG0R-I_zr2vsb-ZMoQ==/109951168311478229.jpg" alt="">
        </div></swiper-slide>
        <swiper-slide class="cd-swiper-slide">
          <div class="lyrics-box">
            <iscroll-view >
              <div class="lyrics">

                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div> <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div> <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div> <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div> <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>        <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div> <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>

              </div>
            </iscroll-view>

          </div>
         </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>

      </swiper>
    </div>
    <div class="player-bottom">
      <div class="player-bottom-btnlist">qsadsa</div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import iscrollView from '@/components/iscrollView.vue'
export default {
  name: 'PlayerModel',
  data: function () {
    return {
      swiperOption: {
        // 如果需要分页器
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
  methods: {

  },
  components: {
    swiper,
    swiperSlide,
    iscrollView
  }

}
</script>

<style scoped lang="scss">
@import "../../../assets/css/variable";
@import "../../../assets/css/mixin";
.player-model{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  .player-header{
    height: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    flex-direction: column;
    @include font_size($font-medium);
   .header-top{
     margin: 4px 0;
   }
  }
  .player-middle{
    position: fixed;
    top: 150px;
    bottom: 250px;
    left: 0;
    right: 0;
    background-color: orange;
    display: flex;
    justify-content: center;
    .cd-swiper{
      width: 80%;
      .cd-swiper-slide{
        width: 100%;
        height: 100%;
        background-color: pink;
        .lyrics-box{
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .slider-item1{
          width: 100%;
          display: flex;
          justify-content:center ;
          img{
            width: 80%;
            height: 80%;
            border-radius: 50%;
            border: 30px solid #fff;
          }
        }

      }
      .my-bullet-active{
        width: 60px;
        background-color: orangered;
      }
      .lyrics{

      }

    }

  }
  .player-bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .player-bottom-btnlist{
      padding-bottom: 250px;
      width: 100%;
      background-color: blanchedalmond;
    }
  }

}

</style>
