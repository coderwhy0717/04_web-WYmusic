import WYSongName from 'components/song-name'
import WYSongListIndex from 'components/song-list-index'
import {formatDate} from '@/utils/format-utils'
import WYUserNameSort from '@/components/user-name-sort'
export const columns = [
    {
        title:'',
        dataIndex: 'index',
        width:74,
        render: (item) => <WYSongListIndex changeSong={item} newShow = {true} />
    },
    {
        title:'标题',
        dataIndex: 'name',
        width: 300,
        render:(item) => <WYSongName item = {item} showname = {true} />
    }, 
    {
        title:'时长',
        dataIndex: 'time',
        width: 100, 
        render:time =>  <div className="time">{formatDate(time,"mm:ss")}</div>
           
    },
    {
        title:'歌手',
        dataIndex: 'singer',
        width: 150,
        render:item => {
            return (
              <div style={{ width: "150px" }}>
                <WYUserNameSort artists={item} />
              </div>
            )
          }
    }
]

// shuju
export function getSongData (ar) {
    return ar?.map((item,index) => {
        return {
                key: item.id,
                index:{index:index+1},
                name: {...item,three:index},
                time:item.dt,
                singer:item.ar,
            }
    })
}
// key: item.id,
// index: {id:item.id,index:index+1},
// name: item,
// time:item.dt,
// singer:item.ar,
// userId: item.ar[0].id,
// album:item.al
