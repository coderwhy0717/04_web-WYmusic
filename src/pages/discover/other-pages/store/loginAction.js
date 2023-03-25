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
          Cookie.set(
            '_token',
            `MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/wapi/clientlog; HTTPOnly;NMTID=00O1AWiy9kv4N0Pa0qVlJ-8rfU5ah4AAAGHEnKw-Q; Max-Age=315360000; Expires=Mon, 21 Mar 2033 07:08:39 GMT; Path=/;;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/api/feedback; HTTPOnly;MUSIC_SNS=; Max-Age=0; Expires=Fri, 24 Mar 2023 07:08:39 GMT; Path=/;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/neapi/clientlog; HTTPOnly;__csrf=7f509ed4bf958a2be1413de2099fbf4c; Max-Age=1296010; Expires=Sat, 08 Apr 2023 07:08:49 GMT; Path=/;;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_U=e4ab5500221ccc291bfdb766d6a29a3f372116aa5804bc07968dddaa74eaa675993166e004087dd37a3df20136b2cf32871ed5833636f7906d7a98f46f5ea8ee7f07082bc904e1a1d4dbf082a8813684; Max-Age=15552000; Expires=Wed, 20 Sep 2023 07:08:39 GMT; Path=/; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/api/feedback; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Wed, 11 Apr 2091 10:22:46 GMT; Path=/wapi/feedback; HTTPOnly`,
            1
          )
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
