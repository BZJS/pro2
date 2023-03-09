import {
  SET_MINISTATE,
  SET_NORMAL
} from '@/store/mutation-type'
export default {
  setMiniState ({ commit }, flag) {
    commit(SET_MINISTATE, flag)
  },
  setNormalState ({ commit }, flag) {
    commit(SET_NORMAL, flag)
  }
}
