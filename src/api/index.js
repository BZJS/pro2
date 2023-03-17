// 运用封装的请求方法再次封装出调用每一个接口的方法，到时候调用几次接口就在这直接调用一个方法就好了
import network from './network'
export const getBanner = () => network.get('/banner?type=2')
export const getPersonalized = () => network.get('/personalized?limit=6')

export const getNewAlNum = () => network.get('/album/newest?limit=6')

export const getNewSong = () => network.get('/personalized/newsong')

export const getDetail = (data) => network.get('/playlist/detail', data)

// 最新专辑
export const getALnum = (data) => network.get('album', data)

export const getSongDetail = (data) => network.get('/song/detail', data)
