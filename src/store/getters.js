export default {
  isShowMiniState (state) {
    return state.miniState
  },
  isShowNormalState (state) {
    return state.normalPlayerState
  },
  isPlaying (state) {
    return state.isPlaying
  }
}
