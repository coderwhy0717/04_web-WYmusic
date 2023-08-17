import React, { memo } from 'react'
import { Table } from 'antd'
import { SongListTableWrapper } from './style'
export default memo(function WYSongListTable(props) {
  const { columns = [], tracks = [] } = props
  const changeMouse = (e, erecord) => {
    // console.log(e,"e")
    // console.log(erecord)
  }
  return (
    <SongListTableWrapper>
      <div className="table">
        <Table
          columns={columns}
          dataSource={tracks}
          size="small"
          pagination={false}
          onRow={(record) => {
            return {
              onClick: (e) => {}, // 点击行
              onDoubleClick: (event) => {},
              onContextMenu: (event) => {},
              onMouseEnter: (e) => {
                changeMouse(e, record)
              }, // 鼠标移入行
              onMouseLeave: (event) => {}
            }
          }}
        />
      </div>
    </SongListTableWrapper>
  )
})
