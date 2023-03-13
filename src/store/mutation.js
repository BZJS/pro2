import {
  SET_MINISTATE,
  SET_NORMAL,
  SET_ISPLAYING

} from './mutation-type'

export default {
  [SET_MINISTATE] (state, flag) {
    state.miniState = flag
  },
  [SET_NORMAL] (state, flag) {
    state.normalPlayerState = flag
  },
  [SET_ISPLAYING] (state, flag) {
    state.isPlaying = flag
  }
}
