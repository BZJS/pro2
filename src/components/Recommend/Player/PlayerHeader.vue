<template>
      <div class="player-header">
        <div class="header-logo"><img src="../../../assets/images/down_163.png" alt=""></div>
       <div class="header-rigth">
         <div class="header-top">停驻</div>
         <div class="header-bottom">黄礼格</div>
       </div>
        <div class="header-null">

        </div>
      </div>
</template>

<script>
export default {
  name: 'PlayerHeader'

}
</script>

<style scoped lang="scss">
.player-header{
  display: flex;
  height: 80px;
  .header-logo{
    width: 20%;
    height: 80px;
    img{
      width: 100%;
    }
  }
  .header-rigth{
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .header-top{
      margin: 6px 0;
    }
  }
  .header-null{
    width: 20%;
  }

}
</style>
