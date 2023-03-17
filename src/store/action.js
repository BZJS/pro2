import {
  SET_MINISTATE,
  SET_NORMAL,
  SET_ISPLAYING,
  SET_SONGDETAIL
} from '@/store/mutation-type'

import { getSongDetail } from '@/api'
export default {
  setMiniState ({ commit }, flag) {
    commit(SET_MINISTATE, flag)
  },
  setNormalState ({ commit }, flag) {
    commit(SET_NORMAL, flag)
  },
  setIsPlaying ({ commit }, flag) {
    commit(SET_ISPLAYING, flag)
  },
  async SetSong ({ commit }, ids) {
    var result = await getSongDetail({ ids: ids })
    commit(SET_SONGDETAIL, result.lrc.lyric)
  }
}
