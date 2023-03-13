import {
  SET_MINISTATE,
  SET_NORMAL,
  SET_ISPLAYING
} from '@/store/mutation-type'
export default {
  setMiniState ({ commit }, flag) {
    commit(SET_MINISTATE, flag)
  },
  setNormalState ({ commit }, flag) {
    commit(SET_NORMAL, flag)
  },
  setIsPlaying ({ commit }, flag) {
    commit(SET_ISPLAYING, flag)
  }
}
