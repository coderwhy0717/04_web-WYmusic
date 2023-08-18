export function getSongLyrics(lyricString, fyString) {
  // console.log(lyricString, '歌词')
  //  fyString 翻译的歌词没有处理
  // [00:19.878]我很抱歉
  const parseExp = /\[(\d{2}):(\d{2})\.(\d{1,3})\]/
  const ly = lyricString.split('\n')

  const lyrics = []
  for (let line of ly) {
    if (line) {
      const dt = parseExp.exec(line)
      // console.log(dt, 'dt 时间')

      if (!dt) {
        const content = line.replace(parseExp, '').trim()
        // line.replace(parseExp, '').trim()
        lyrics.push({ time: 'xxx', content, key: 0 })
        continue
      }
      const time1 = dt[1] * 60 * 1000
      const time2 = dt[2] * 1000
      const time3 = dt[3].length === 3 ? dt[3] * 1 : dt[3] * 10
      const time = time1 + time2 + time3

      const content = line.replace(parseExp, '').trim()
      // 如果有歌词 就添加 没有就不添加进去
      if (!!content) {
        const lineObj = { time, content }
        lyrics.push(lineObj)
      }
    }
  }

  // 如果翻译歌词 就合并
  if (fyString) {
    const fy = fyString.split('\n')
    // console.log(fy, '歌词')
    // 中英文 歌曲
    for (let zline of fy) {
      if (zline) {
        const zdt = parseExp.exec(zline)
        // console.log(zdt, 'zdt')
        if (!zdt) {
          const content = zline.replace(parseExp, '').trim()
          // zline.replace(parseExp, '').trim()
          lyrics.push({ time: 'xxx', content, key: 0 })
          continue
        }
        const time1 = zdt[1] * 60 * 1000
        const time2 = zdt[2] * 1000
        const time3 = zdt[3].length === 3 ? zdt[3] * 1 : zdt[3] * 10
        const time = time1 + time2 + time3

        const zcontent = zline.replace(parseExp, '').trim()
        const newIndex = lyrics.findIndex((item) => item.time === time)
        // 判断是 判断没有歌词的 去掉
        if (!!zcontent) {
          // 英文歌词 和 中文歌词 合并
          const content = lyrics[newIndex].content + `\n${zcontent}`
          lyrics[newIndex] = { time, content }
          // console.log(lyrics, '处理')
        }
      }
    }
  }

  return lyrics
}
