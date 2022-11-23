import WYSongListIndex from 'components/song-list-index'
import WYSongName from 'components/song-name'
import WYUserNameSort from 'components/user-name-sort'
import {formatMinuteSecond} from '@/utils/format-utils'
export const columns = [
    {
      title: '',
      dataIndex: 'index',
      width:74,
      render: (item) => <WYSongListIndex changeSong={item} />
    },
    {
        title:'歌曲标题',
        dataIndex:'name',
        width: 345,
        render: items => <WYSongName item={items} />
    },
    {
        title:'时长',
        dataIndex:'time',
        width: 91,
        render: time => <div>{formatMinuteSecond(time)}</div>
    },
    {
        title:'歌手',
        dataIndex:'singer',
        width: 127,
        render: item =>  <div style={{ width: "112px" }}><WYUserNameSort artists={item} /></div>
        // 
    }
]

export function getSongdetailCover (ar) {
    return ar?.map((item,index) => {
        return {
          key: item.id,
          index: {id:item.id,index:index+1},
          name: item,
          time:item.dt,
          singer:item.ar,
          userId: item.ar[0].id
        }
      })
  }

  export const images = [
      'http://p2.music.126.net/RVndYo6MU5TQOBo4SozODA==/109951166715701037.jpg?param=40y40',
      'http://p1.music.126.net/ugRrLbFXefbn40jfMbn5Hg==/109951164742477488.jpg?param=40x40',
      'http://p1.music.126.net/wyqesA1StuMJ90llyNm-bQ==/109951166179403290.jpg?param=40x40',
      'http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg?param=40x40',
      'http://p1.music.126.net/_NFuSZmuzKV5GgS3v6M4SQ==/109951165593117041.jpg?param=40x40',
      'http://p1.music.126.net/vnPEjoEVU4YcrqXvLrpAbA==/109951166508459687.jpg?param=40x40',
      'http://p1.music.126.net/cUj3c7O2PM-uPBiOw_PG0w==/109951165614005360.jpg?param=40x40',
      'http://p1.music.126.net/C5ypYbCIqNSW_w-6QYYY0A==/109951167286500764.jpg?param=40x40'
  ]