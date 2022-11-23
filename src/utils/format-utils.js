// ?imageView&blur=40x20 照片模糊拼接
export function getSizeImage (imgUrl,size) {
    return `${imgUrl}?param=${size}x${size}`
}

// 对播放量的处理
export function formatNumber(num) {
    if (num === 0 || num < 10000) {
      return num + ''
    } else if (num > 1 && num < 10000) {
      return num + ''
    } else if (num >= 100000000) {
      return (num / 100000000).toFixed(2) + '亿'
    } else {
      return (num / 10000).toFixed(2) + '万'
    }
  }
// 对歌曲的时间格式化
export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}
export function formatYearMonthDay(time) {
  return formatDate(time, "yyyy-MM-dd");
}
export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}
//以上-- 对歌曲的时间格式化


  export function getPlayUrl (id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }

export function getdescription (srting) {
    if(!srting) return
    const dsp = srting.split("\n")
   return dsp
}
export function subscribedCount(sub) {
  // console.log(sub)
  if(sub < 99999) return sub
  if(9999 < sub && sub > 99999) return (sub / 10000).toFixed(0)+"万"
  if(sub > 99999999) return (sub / 100000000).toFixed(0) + "亿"
}

// export function formatterDate(val,lay='-') {
//       // 将时间转换为 XX年XX月XX日XX时XX分XX秒格式
//       let newDateObj = new Date(val)
//       let year = newDateObj.getFullYear()
//       let month = newDateObj.getMonth() + 1
//       let day = newDateObj.getDate()
//       // let hh = newDateObj.getHours()
//       // let mm = newDateObj.getMinutes()
//       // let ss = newDateObj.getSeconds()
//       month = month > 9 ? month : '0' + month
//       day = day > 9 ? day : '0' + day
//       // 发送时间
//       return `${year}${lay}${month}${lay}${day}`
//   }

// 处理Album详情页的专辑介绍：
export function getAlbumText(description) {
  const des = description?.split('\n')
  return des
}