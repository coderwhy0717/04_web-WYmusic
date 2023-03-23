import { getcheck, getKey, getloginactive } from '../../../../services/login'
import {
  changeLoginImageAction,
  changeQRCodeAction
} from '../../../user-home/store/actionCreators'

// 获取 key 和 二维码img等 状态

export function getKeyAction(value) {
  return async (dispatch) => {
    const timestamp = Date.now()
    const qrimg = 'http://124.220.210.84:3000'
    // 1. 第一步 key
    const res = await getKey(timestamp)
    const unikey = res.data.unikey
    // console.log(res, unikey, 'key')
    dispatch(changeQRCodeAction({ code: 801 }))
    // 2. 第二步 image
    const image = await getloginactive(unikey, qrimg, Date.now())
    // console.log(image, 'image')
    dispatch(changeLoginImageAction(image.data.qrimg))

    // varia 根据 状态码无限 改变
    let varia = 0
    // 默认进入 等待扫码
    let go = 801
    let other = value
    // 3. 第三步 检查 扫码状态

    let int = setInterval(async () => {
      const chech = await getcheck(unikey, Date.now())
      console.log(chech, 'chech')
      varia = chech.code
      if (value === 2 && int) {
        console.log(int, 'int')
        clearInterval(int)
        int = null
        return
      }
      if (varia === 800) {
        // 二维码已过期
        dispatch(changeQRCodeAction(chech))
        clearInterval(int)
        int = null
        return
      }
      if (varia === 801 && go === 801) {
        // 等待扫码
        dispatch(changeQRCodeAction(chech))
        go = 802
        return
      }
      if (varia === 802 && go === 802) {
        // 扫码中...
        dispatch(changeQRCodeAction(chech))
        go = 803
        return
      }
      if (varia === 803 && go === 803) {
        // 扫码成功
        dispatch(changeQRCodeAction(chech))
        localStorage.setItem('cookie', chech.cookie)
        go = 801
        clearInterval(int)
        int = null
        return
      }
    }, 1000)
    if (value === 1) {
      console.log(int, 'int')
      clearInterval(int)
    }
  }
}
