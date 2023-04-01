import {
  SET_MINISTATE,
  SET_NORMAL,
  SET_ISPLAYING,
  SET_SONGDETAIL,
  SET_LYRICS
} from '@/store/mutation-type'

import { getSongDetail, getLyrics, getSongUrl } from '@/api'
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
    const urls = await getSongUrl({ id: ids.join(',') })

    const list = []

    result.songs.forEach(function (value) {
      const obj = {}
      obj.name = value.name
      let singer = ''
      urls.data.forEach((item, index) => {
        if (value.id === item.id) {
          obj.url = item.url
        }
      })
      value.ar.forEach(function (item, index) {
        if (index === 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      obj.singer = singer
      obj.picUrl = value.al.picUrl
      obj.id = value.id
      list.push(obj)
    })

    commit(SET_SONGDETAIL, list)
  },
  async setLyrics ({ commit }, id) {
    const result = await getLyrics({ id: id })
    // 获取到数据了
    // console.log(result)
    // console.log(result.lrc.lyric)
    // commit(SET_LYRICS, parseLyric(result.lrc.lyric))
    const lyrics = parseLyric(result.lrc.lyric)

    commit(SET_LYRICS, lyrics)
  }

}
function parseLyric (lrc) {
  const lyrics = lrc.split('\n')
  // [00:00.000] 作曲 : 林俊杰
  // 1.定义正则表达式提取[00:00.000]
  const reg1 = /\[\d*:\d*\.\d*\]/g
  // 2.定义正则表达式提取 [00
  const reg2 = /\[\d*/i
  // 3.定义正则表达式提取 :00
  const reg3 = /\:\d*/i
  // 4.定义对象保存处理好的歌词
  const lyricObj = {}
  lyrics.forEach(function (lyric) {
    // 1.提取时间
    let timeStr = lyric.match(reg1)
    if (!timeStr) { return }
    timeStr = timeStr[0]
    // 2.提取分钟
    const minStr = timeStr.match(reg2)[0].substr(1)
    // 3.提取秒钟
    const secondStr = timeStr.match(reg3)[0].substr(1)
    // 4.合并时间, 将分钟和秒钟都合并为秒钟
    const time = parseInt(minStr) * 60 + parseInt(secondStr)
    // 5.处理歌词
    const text = lyric.replace(reg1, '').trim()
    // 6.保存数据
    lyricObj[time] = text
  })
  return lyricObj
}
