<template>
    <div class="list-player">
        <div class="list-state">
          <div class="state-left"></div>
          <div class="state-title">顺序播放</div>
          <div class="state-delete"></div>
        </div>
        <div class="list-el">
          <div class="el-item">
            <div class="el-star"></div>
            <div class="el-music">1111</div>
            <div class="el-change">
              <div class="el-change-love"></div>
              <div class="el-change-del"></div>
            </div>
          </div>
        </div>
        <div class="list-close">
          关闭
        </div>

    </div>
</template>

<script>
export default {
  name: 'ListPlayer'
}
</script>

<style scoped lang="scss">
@import "../../../assets/css/variable";
@import "../../../assets/css/mixin";
.list-player{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  //top: 350px;
  z-index: 100;
  background-color: pink;
  .list-state{
    height: 100px;
    width: 100%;
    display: flex;
    .state-left{
      width: 80px;
      @include bg_img('../../../assets/images/one')
    }
    .state-title{
      flex: 1;
    }
    .state-delete{
      width: 80px;
      //@include bg_img('../../../assets/images/del')
    }
  }
  .list-el{
    display: flex;
    .el-star{
      width: 80px;
      @include bg_img('../../../assets/images/play')
    }
    .el-music{
      flex: 1;
      line-height: 100px;
    }
    .el-change{
      width: 160px;
      display: flex;
      .el-change-love{
        width: 50%;
        @include bg_img('../../../assets/images/favorite')
      }
      .el-change-del{
        width: 50%;
        //@include bg_img('../../../assets/images/close')
      }
    }

  }
  .list-close{
    width: 100%;
    height: 100px;
    background-color: red;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
}
</style>
