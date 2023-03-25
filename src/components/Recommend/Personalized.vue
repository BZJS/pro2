<template>
  <div class="personalized">
      <div class="personlized-title">{{title}}</div>
    <div class="personalized-list">
      <div class="personalized-item" v-for="value in personalized" :key="value.id" @click="expandMusic(value.id)">
        <img v-lazy="value.picUrl" alt="">
        <p>{{value.name}}</p>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Personalized',
  data: function () {
    return {

    }
  },
  props: {
    personalized: {
      type: Array,
      default: () => [],
      require: true
    },
    title: {
      type: String,
      default: '',
      require: true
    },
    type: {
      type: String,
      default: ''

    }
  },
  methods: {
    ...mapActions([
      'SetSong'
    ]),
    expandMusic (id) {
      // console.log(id)
      this.$emit('select', id, this.type)
      this.SetSong([id])

      // this.$router.push(`/recommend/detail/${id}`)
    }
  },
  computed: {
    ...mapGetters([
      'isSongDetail'
    ])
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.personalized{
  @include bg_sub_color();

  .personlized-title{
    width: 100%;
    height: 84px;
    line-height: 84px;

  }
  .personalized-list{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;

    .personalized-item{
      width: 200px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 4px 0;
      img{
        width: 100%;
      }
      p{
        text-align: center;
      }
    }
  }
}
</style>
