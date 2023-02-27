<template>
  <div id="wrapper" ref="wrapper">
  <slot></slot>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'iscrollView',
  mounted () {
    this.myScroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false,
      probeType: 3,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true

    })
    const observer = new MutationObserver((mutations, observer) => {
      this.refresh()
    })
    const config = {
      childList: true, // 观察目标子节点的变化，添加或者删除
      subtree: true, // 默认为 false，设置为 true 可以观察后代节点
      attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
    }
    observer.observe(this.$refs.wrapper, config)
  },
  data: function () {
    return {
      myScroll: null

    }
  },
  methods: {
    scrolling (fn) {
      this.myScroll.on('scroll', function () {
        fn(this.y)
      })
      // this.refresh()
    },

    refresh () {
      setTimeout(() => {
        this.myScroll.refresh()
      }, 100)
    }

  }

}
</script>

<style scoped lang="scss">
#wrapper{
  width: 100%;
  height: 100%;
  //overflow: hidden;

}
</style>
