import request from './request'

export function getKey(timestamp) {
  return request({
    url: '/login/qr/key',
    params: {
      timestamp
    }
  })
}

export function getloginactive(key, qrimg, timestamp) {
  return request({
    url: '/login/qr/create',
    params: {
      key,
      qrimg,
      timestamp
    }
  })
}
// 检查 qrcode
export function getcheck(key, timestamp) {
  return request({
    url: '/login/qr/check',
    params: {
      key,
      timestamp
    }
  })
}

//获取登录状态 用户详情
export function getStatus(cookie, timestamp = new Date().getTime()) {
  return request({
    url: '/login/status',
    params: {
      cookie,
      timestamp
    }
  })
}

// 获取用户详情
export function getUserdetail(uid, timestamp = new Date().getTime()) {
  return request({
    url: '/user/detail',
    params: {
      uid,
      timestamp
    }
  })
}
// 获取用户 我的消息 所有通知 最新消息 getMessageNewCount
export function getMessageNewCount(timestamp = new Date().getTime()) {
  return request({
    url: '/pl/count',
    params: {
      timestamp
    }
  })
}

// 1. 我的
export function getMeForwards(
  offset = 0,
  limit = 20,
  timestamp = new Date().getTime()
) {
  return request({
    url: '/msg/forwards',
    params: {
      limit,
      offset,
      timestamp
    }
  })
}
// 我的 里面 被艾特的名字 搜索获取id
export function getUserId(
  keywords,
  type = 1002,
  limit = 1,
  timestamp = new Date().getTime()
) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords,
      type,
      limit,
      timestamp
    }
  })
}

// 2. 获取 私信 /msg/private
export function getMsgPrivate(cookie, timestamp = new Date().getTime()) {
  return request({
    url: '/msg/private',
    method: 'post',
    data: {
      cookie,
      timestamp
    }
  })
}
// send 发送私信 chat 聊天
export function getSendPrivate(
  user_ids,
  msg,
  timestamp = new Date().getTime()
) {
  return request({
    url: '/send/text',
    params: {
      user_ids,
      msg,
      timestamp
    }
  })
}
export function getPrivateConent(
  uid,
  before,
  limit = 5,
  timestamp = new Date().getTime()
) {
  return request({
    url: '/msg/private/history',
    params: {
      uid,
      before,
      limit,
      timestamp
    }
  })
}

// 3. 评论 /msg/comments
export function getMsgComments(
  uid,
  limit = 20,
  before,
  timestamp = new Date().getTime()
) {
  return request({
    url: '/msg/comments',
    params: {
      uid,
      limit,
      before,
      timestamp
    }
  })
}
// 4. 通知
export function getMsgNotices(
  offset = 0,
  limit = 20,
  timestamp = new Date().getTime()
) {
  return request({
    url: '/msg/notices',
    params: {
      limit,
      offset,
      timestamp
    }
  })
}
