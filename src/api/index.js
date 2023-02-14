// 运用封装的请求方法再次封装出调用每一个接口的方法，到时候调用几次接口就在这直接调用一个方法就好了
import network from './network'
export const getBanner = () => network.get('/banner?type=2')
