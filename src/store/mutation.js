import {
  SET_MINISTATE,
  SET_NORMAL
} from './mutation-type'

export default {
  [SET_MINISTATE] (state, flag) {
    state.miniState = flag
  },
  [SET_NORMAL] (state, flag) {
    state.normalPlayerState = flag
  }
}
