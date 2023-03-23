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
export function getcheck(key, timestamp) {
  return request({
    url: '/login/qr/check',
    params: {
      key,
      timestamp
    }
  })
}
