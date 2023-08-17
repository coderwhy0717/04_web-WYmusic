import {
  getcheck,
  getKey,
  getloginactive,
  getMeForwards,
  getMessageNewCount,
  getMsgComments,
  getMsgNotices,
  getMsgPrivate,
  getStatus,
  getUserId,
  getPrivateConent,
  getSendPrivate
} from '../../../../services/login'
import {
  changeLoginImageAction,
  changeLoginShowAction,
  changeQRCodeAction
} from '../../../user-home/store/actionCreators'
import Cookie from '../../../../utils/cookie'
import Localcache from '../../../../utils/cache'
import * as actionType from './constans'
import { changeShowErrorAction } from './actionCreators'

// 我的
const changeMsgMeAction = (obj) => ({
  type: actionType.MSG_ME,
  obj
})
// 私信
const changeMsgPrivateAtion = (obj) => ({
  type: actionType.MSG_PRIVATE,
  obj
})
// 评论
const changeMsgCommentAction = (obj) => ({
  type: actionType.MSG_COMMENT,
  obj
})
// 通知
const cahngeMsgInformAction = (obj) => ({
  type: actionType.MSG_INFORM,
  obj
})
export const changeMsgIconAction = (value) => ({
  type: actionType.MSG_ICON,
  value
})
export const changeMessageNewCount = (obj) => ({
  type: actionType.MESSAGE_NEW_COUNT,
  obj
})

const changeProvateConent = (arr) => ({
  type: actionType.MSG_PRIVATE_CONENT,
  arr
})

// 通过路由改变去请求用户 我的消息 所有通知 最新消息 getMessageNewCount
export function getMessageNewCountAction() {
  return async (dispatch) => {
    const res = await getMessageNewCount()
    if (res.code === 'ERR_NETWORK') {
      dispatch(changeShowErrorAction('ERR_NETWORK'))
      return res.code
    }

    console.log(res, '消息')
    if (res.code === 200) {
      dispatch(changeMessageNewCount(res))
    } else {
      console.log(res, 'cookie有错误/过期')
      Localcache.deleteCache('userInfo')
      Cookie.remove('_cookie')
    }
  }
}
// 检查登录状态 cookie是否有效 存储
export function chechCookieAction(type = 1, offset = 0, limit = 20) {
  return async (dispatch, getState) => {
    console.log(type, 'type')

    // -------判断 cookie是否过期 无效等
    const cookie = Cookie.get('_cookie')
    // console.log(!cookie, '检查状态cookie')
    if (!cookie) {
      // Localcache.setCache('userInfo', null)
      Localcache.deleteCache('userInfo')
      return '/login'
    }
    //1. 检查登录状态 cookie 是否有效
    const status = await getStatus(cookie)
    // console.log(status, '检查登录状态 cookie是否有效')
    if (
      status.data.account.type === 0 &&
      !status.data.profile &&
      status.data.code === 200
    ) {
      Localcache.deleteCache('userInfo')
      Cookie.remove('_cookie')
      // Localcache.setCache('userInfo', null)
      return '/login'
    }
    // ----------------------
    if (status?.data?.profile) {
      Localcache.setCache('userInfo', status.data.profile)
      // 1. 检查登录状态 成功 发送网络请求  通知  我的 - 私信 - 评论 - 通知 getMsgPrivate
      switch (type) {
        case 2:
          // 2.私信
          console.log('私信')
          const msg = await getMsgPrivate(cookie)
          console.log(msg, 'Private')
          // radux
          dispatch(changeMsgPrivateAtion(msg))
          break
        case 3:
          // 3. 评论
          const comments = await getMsgComments(status.data.profile.userId)
          console.log(comments, 'comments')
          dispatch(changeMsgCommentAction(comments))
          break
        case 4:
          // 4. 通知 getMsgNotices
          const notices = await getMsgNotices()
          console.log(notices, '通知')
          dispatch(cahngeMsgInformAction(notices))
          break
        default:
          // 1. @我
          const me = await getMeForwards(offset, limit)
          console.log(me, '我的')
          dispatch(changeMsgMeAction(me))
      }
      return status.data.code
    }
  }
}

// 获取 key 和 二维码img等 状态
// 为什么放外面 因为从新进来会重制 改变变量  setInterval实体
let int = null
export function getKeyAction(value) {
  return async (dispatch) => {
    // if (int) return
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
          // 手动添加 cookie 模拟登录流程
          // Cookie.set(
          //   '_cookie',
          //   `MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_U=e4ab5500221ccc291bfdb766d6a29a3f7c2edd5d0875459392a8315143083e21993166e004087dd3bb3fb15de9141410fe3b5dc4b4f9a9a76d7a98f46f5ea8ee7f07082bc904e1a1d4dbf082a8813684; Max-Age=15552000; Expires=Tue, 17 Oct 2023 01:35:32 GMT; Path=/; HTTPOnly;__csrf=10779e2cb6ca9eeec5984d572722e6d2; Max-Age=1296010; Expires=Fri, 05 May 2023 01:35:42 GMT; Path=/;;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_SNS=; Max-Age=0; Expires=Thu, 20 Apr 2023 01:35:32 GMT; Path=/;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/api/feedback; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1550253979811; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1550256904283; Max-Age=2147483647; Expires=Tue, 08 May 2091 04:49:39 GMT; Path=/api/feedback; HTTPOnly`,
          //   10
          // )

          // Cookie.set(
          //   '_cookie',
          //   `MUSIC_U=b690b5d040655ea28d39ba04fd65cdbc2dea8f8ab55dfd3ef2de9409fc2030b1c84e8a4f4ba4f13e75fcd68c856c6d0a156c1c6c547f54f57f0abd743ac510eec5560a64269ace83a0d2166338885bd7; Max-Age=15552000; Expires=Wed, 11 Oct 2023 07:28:48 GMT; Path=/; HTTPOnly;__csrf=9298faa86e8de7497f2516f841e19585; Max-Age=1296010; Expires=Sat, 29 Apr 2023 07:28:58 GMT; Path=/;;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/api/feedback; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/api/feedback; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_SNS=; Max-Age=0; Expires=Fri, 14 Apr 2023 07:28:48 GMT; Path=/;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1489799342664; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_R_T=1489799513362; Max-Age=2147483647; Expires=Wed, 02 May 2091 10:42:55 GMT; Path=/api/clientlog; HTTPOnly`,
          //   1
          // )
          // const cookie = Cookie.get('_cookie')
          // //  2. 去检查cookie 后 存储用户信息
          // const status = await getStatus(cookie)
          // console.log(status, '登录状态用户信息 获取id')
          // if (status?.data?.profile) {
          //   Localcache.setCache('userInfo', status.data.profile)
          //   // 请求用户 我的消息 所有通知 最新消息 getMessageNewCount
          //   dispatch(getMessageNewCountAction())
          //   // changeLoginShowAction 关闭登录窗口
          //   dispatch(changeLoginShowAction(false))
          // } else {
          //   // Localcache.deleteCache('userInfo')
          //   // Cookie.remove('_cookie')
          //   // alert('cookie失效')
          // }
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
          // radux 存储
          dispatch(changeQRCodeAction(chech))
          // 1. 存储 cookie
          Cookie.set('_cookie', chech.cookie)
          //  2. 去检查cookie 后 存储用户信息
          const status = await getStatus(chech.cookie)
          console.log(status, '登录状态用户信息 获取id')
          if (status?.data?.profile) {
            Localcache.setCache('userInfo', status.data.profile)
            // 请求用户 我的消息 所有通知 最新消息 getMessageNewCount
            dispatch(getMessageNewCountAction())
            // changeLoginShowAction 关闭登录窗口
            dispatch(changeLoginShowAction(false))
          } else {
            Localcache.deleteCache('userInfo')
            Cookie.remove('_cookie')
            alert('cookie失效')
          }

          // 成功后 取消定时器 初始化等
          // changeLoginShowAction 关闭登录窗口
          dispatch(changeLoginShowAction(false))
          go = 801
          clearInterval(int)
          int = null

          return chech.code
        }
      }, 1000)
    }
  }
}

//1. 滚动加载 @我的
export function atMeAction(offset = 0, limit = 20) {
  return async (dispatch, getState) => {
    console.log(offset, limit, 'offset')
    const msgMe = getState().getIn(['otherPages', 'msgMe'])
    let newMsgMe = { ...msgMe }
    const me = await getMeForwards(offset, limit)
    console.log(me, '我的')
    // 请求没有了 改变存储的请求 true 改为 false
    if (!me.more) {
      newMsgMe.more = me.more
      if (me?.forwards > 0) {
        newMsgMe.forwards.push(...me?.forwards)
      }
      dispatch(changeMsgMeAction(newMsgMe))
      console.log(newMsgMe, 'newMsgMe1')
      return me.more
    }
    // 当存储里面有数据时 网络请求添加进去数据
    if (newMsgMe.forwards && newMsgMe.more) {
      newMsgMe.forwards.push(...me?.forwards)
      console.log(newMsgMe, 'newMsgMe')

      dispatch(changeMsgMeAction(newMsgMe))
      return me.more
    }
    // 存储里没有数据 就直接 添加进去
    dispatch(changeMsgMeAction(me))
    return me.more
  }
}
//1.1 @ at的名字点击取/user/home页面 需要去搜索 名字获取id
export function getUserIdAction(name) {
  return async (dispatch) => {
    const id = await getUserId(name)
    if (id.code === 200) {
      return id.result.userprofiles[0].userId
    }
  }
}
//2. // 获取私信内容 /msg/private/history?uid=9003
export function getPrivateAction() {
  return async (dispatch) => {
    // const { cookie } = await checkCookie()
    // const msg = await getMsgPrivate(cookie)
    // console.log(msg, 'Private')
    // dispatch(changeMsgPrivateAtion(msg))
  }
}
/**
 * before 是否加载更多 私信 内容
 */
export function getPrivateConentAction(uid, before) {
  console.log(before, uid, '时间')

  return async (dispatch, getState) => {
    let endTime
    let newPrivateConent
    if (before) {
      const PrivateConent = getState().getIn(['otherPages', 'PrivateConent'])
      endTime = PrivateConent?.msgs.slice(-1)[0].time
      newPrivateConent = { ...PrivateConent }
    }
    const res = await getPrivateConent(uid, endTime)
    // console.log(res, 'res内容')
    // 请求没有了 改变存储的请求 true 改为 false
    if (before && !res.more) {
      newPrivateConent.more = res.more
      if (res.msgs.length > 0) {
        console.log(res, '大于0')
        newPrivateConent.msgs.push(...res.msgs)
      }
      dispatch(changeProvateConent(newPrivateConent))
      console.log(newPrivateConent, '加载更多添加进去的1')
      return res.more
    }
    // 当存储里面有数据时 网络请求添加进去数据
    if (before && res.more) {
      newPrivateConent.msgs.push(...res.msgs)
      console.log(newPrivateConent, '加载更多添加进去的2')
      dispatch(changeProvateConent(newPrivateConent))
      return res.more
    }

    // 存储里没有数据 就直接 添加进去
    dispatch(changeProvateConent(res))

    return res
  }
}

//  发送私信 send

export function getSendPrivateAction(user_ids, msg) {
  return async (dispatch) => {
    const res = await getSendPrivate(user_ids, msg)
    console.log(res, '聊天')
    if (res.code === 200) {
      // 返回出去 后从新请求 聊天内容
      return res
    }
  }
}
