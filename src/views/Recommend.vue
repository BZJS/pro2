<template>
<div class="recommend">
  <Banner :banners="banners"></Banner>
</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import { getBanner } from '@/api'
export default {
  name: 'Recommend',

  created () {
    getBanner().then((data) => {
      this.banners = data.banners
      console.log(data)
    })
  },
  data: function () {
    return {
      banners: []
    }
  },
  components: {
    Banner
  }
}
</script>

<style scoped>

</style>
