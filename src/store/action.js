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
    var result = await getSongDetail({ ids: ids.join(',') })
    const list = []

    result.songs.forEach(function (value) {
      const obj = {}
      obj.name = value.name
      let singer = ''
      value.ar.forEach(function (item, index) {
        if (index === 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      obj.singer = singer
      obj.picUrl = value.al.picUrl
      list.push(obj)
    })

    commit(SET_SONGDETAIL, list)
  }
}
