<template>

     <ul>
       <li><img src="../../../assets/images/small_play_163@2x.png" alt="">播放全部</li>
       <li v-for="value in detailItem" :key="value.userId" @click.stop="showNormal">
         <div class="first">{{value.name}}</div>
         <div class="second">{{value.al.name}} - {{value.ar[0].name}}</div>
       </li>
     </ul>

</template>

<script>

import { mapActions } from 'vuex'

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

  },
  methods: {
    ...mapActions([
      'setNormalState'
    ]),
    showNormal () {
      this.setNormalState(true)
    }
  }
}
</script>

<style scoped lang="scss">
  ul{
    background-color: #fff;
    width: 100%;
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

</style>
