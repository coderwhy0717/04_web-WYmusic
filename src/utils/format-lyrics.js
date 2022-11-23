export function getSongLyrics(lyricString) {
    // [00:19.878]我很抱歉
    const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
    const ly = lyricString.split('\n')
    const lyrics = []
    for(let line of ly) {
       if(line) {
        const dt = parseExp.exec(line)
        if(!dt) continue
        const time1 = dt[1] * 60 * 1000
        const time2 = dt[2] * 1000
        const time3 = dt[3].length === 3 ? dt[3] * 1 : dt[3] * 10
        const time = time1 + time2 + time3
        const content = line.replace(parseExp,"").trim()
        const lineObj = {time,content}
        lyrics.push(lineObj)
       }
    }
    return lyrics
}

