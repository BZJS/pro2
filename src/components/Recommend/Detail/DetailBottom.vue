<template>
  <div class="detail-bottom">
   <iscroll-view>
     <ul>
       <li><img src="../../../assets/images/small_play_163@2x.png" alt="">播放全部</li>
       <li v-for="value in detailItem" :key="value.userId">
         <div class="first">{{value.name}}</div>
         <div class="second">{{value.al.name}} - {{value.ar[0].name}}</div>
       </li>
     </ul>
   </iscroll-view>
  </div>
</template>

<script>
import iscrollView from '@/components/iscrollView.vue'
export default {
  name: 'DetailBottom',
  props: {
    detailItem: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  components: {
    iscrollView
  }
}
</script>

<style scoped lang="scss">
  ul{

    li:nth-child(1){
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    li{
    padding: 10px 0px 10px 10px;
      border-bottom: 1px solid gray;
      .first{
        font-size:20px ;
        margin: 10px 0;
      }
      .second{
        font-size: 18px;
      }
         }
  }
  .detail-bottom{
    position: fixed;
    top: 560px;
    left: 0;
    right: 0;
    bottom: 0;

  }
</style>
