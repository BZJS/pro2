import {
  SET_MINISTATE,
  SET_NORMAL,
  SET_ISPLAYING,
  SET_SONGDETAIL,
  SET_LYRICS

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
  },
  [SET_SONGDETAIL] (state, data) {
    state.songDetail = data
  },
  [SET_LYRICS] (state, data) {
    state.currentLyrics = data
  }

}
