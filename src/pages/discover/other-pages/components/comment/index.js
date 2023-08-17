import React, { memo } from 'react'
import { CommentWrapper } from './style'
import { Input } from 'antd'
export default memo(function WYComment() {
  const { TextArea } = Input

  return (
    <CommentWrapper>
      <div className="comment-header">
        <div className="text">评论</div>
        <div>共60732条评论</div>
      </div>
      <div className="comment-text">
        <img
          src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
          alt=""
        ></img>
        <div className="div-text">
          <div>
            {/* <TextArea
              // ref={PrivateInputRef}
              value={'评论'}
              maxLength={200}
              // onChange={(e) => setValue(e.target.value)}
              autoSize={{
                minRows: 23,
                maxRows: 3
              }}
              // TextArea="aaa"
              // defaultValue="Ant Design love you!"
            /> */}
            <textarea className="text" placeholder="评论" />
            <div className="icon">◆</div>
            <div className="icons">◆</div>
          </div>
          <div className="onbottom">
            <div className="@">
              <span>@</span>
              <span>@</span>
            </div>
            <div className="comment">
              <span>140</span>
              <span>评论</span>
            </div>
          </div>
        </div>
      </div>
    </CommentWrapper>
  )
})
