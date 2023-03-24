import { getcheck, getKey, getloginactive } from '../../../../services/login'
import {
  changeLoginImageAction,
  changeLoginShowAction,
  changeQRCodeAction
} from '../../../user-home/store/actionCreators'
import Cookie from '../../../../utils/cookie'
// 获取 key 和 二维码img等 状态
// 为什么放外面 因为从新进来会重制 改变变量  setInterval实体
let int = null
export function getKeyAction(value) {
  return async (dispatch) => {
    // 不管是否有循环定时器还是没有定时器 只要value === 2 就退出去
    if ((int || !int) && value === 2) {
      clearInterval(int)
      int = null
      return
    }
    // 传入 1 就取消掉上一次的循环定时器
    if (int && value === 1) {
      clearInterval(int)
      int = null
      return
    }

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

    // 判断是否有以前的定时器
    if (!int) {
      int = setInterval(async () => {
        // 3. 第三步 检查 扫码状态
        const chech = await getcheck(unikey, Date.now())
        console.log(chech, 'chech')
        varia = chech.code
        // if (value === 2 && int) {
        //   console.log(int, 'int')
        //   clearInterval(int)
        //   int = null
        //   return
        // }
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
          // LocalCookie
          // Cookie.set('_token', chech.code, 1)
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
          Cookie.set('_token', chech.cookie, 1)

          // changeLoginShowAction 关闭登录窗口
          dispatch(changeLoginShowAction(false))
          go = 801
          clearInterval(int)
          int = null
          return
        }
      }, 1000)
    }
  }
}
