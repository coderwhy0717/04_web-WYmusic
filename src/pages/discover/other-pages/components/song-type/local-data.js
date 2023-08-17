import { NavLink } from 'react-router-dom'
import { formatDate } from '@/utils/format-utils'
import WYUserNameSort from 'components/user-name-sort'
// import { Radio, Space, Table, Tag } from 'antd';
import WYSongListIndex from 'components/song-list-index'
import WYSongName from 'components/song-name'
export const columns = [
  {
    title: '',
    dataIndex: 'index',
    width: 74,
    render: (item) => <WYSongListIndex changeSong={item} />
  },
  {
    title: '歌曲标题',
    dataIndex: 'name',
    width: 236,
    render: (item) => <WYSongName item={item} />
  },
  {
    title: '时长',
    dataIndex: 'time',
    width: 111,
    render: (time) => <div>{formatDate(time, 'mm:ss')}</div>
  },
  {
    title: '歌手',
    dataIndex: 'singer',
    width: 90,
    render: (tags) => {
      return (
        <div style={{ width: '72px' }} className="text-nowrap">
          <WYUserNameSort artists={tags} />
        </div>
      )
    }
  },
  {
    title: '专辑',
    dataIndex: 'album',
    width: 128,
    render: (item) => {
      return (
        <div className="album text-nowrap">
          <NavLink to={`/discover/albumDetail/${item.id}`} key={item.id}>
            {item.name}
          </NavLink>
        </div>
      )
    }
  }
]

//  export const data = [
//     {
//       key: '123456',
//       play: '播放',
//       name: '又害怕你不知道',
//       time:'03:32',
//       singer:'歌手',
//       album:'专辑'
//     }
// ]

export function getSongdetailCover(ar) {
  return ar?.map((item, index) => {
    return {
      key: item.id,
      index: { id: item.id, index: index + 1 },
      name: item,
      time: item.dt,
      singer: item.ar,
      userId: item.ar[0].id,
      album: item.al
    }
  })
}
