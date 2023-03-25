export default {
  isShowMiniState (state) {
    return state.miniState
  },
  isShowNormalState (state) {
    return state.normalPlayerState
  },
  isPlaying (state) {
    return state.isPlaying
  },
  isSongDetail (state) {
    return state.songDetail
  },
  isCurrentSong (state) {
    const obj = {
      name: '',
      singer: '',
      picUrl: null
    }
    if (state.songDetail.length !== 0) {
      return state.songDetail[state.currentIndex]
    }
    return obj
  }
}
