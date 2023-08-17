import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getConcernAction,
  getUserInfoAction
} from '../../../../user-home/store/actionCreators'
import { UserfollowsWrapper } from './style'
import { objectChange } from '../../../../../utils/format-utils'
import UserInfo from '../../../../../components/user-info'
import FollowsCover from './c-cpn/follows-cover'
import { Pagination } from 'antd'
const UserFollows = memo((props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // 用户信息 getUserInfoAction
    dispatch(getUserInfoAction(props.match.params.id))
  }, [dispatch, props])

  useEffect(() => {
    //  用户关注 列表  getConcernAction
    dispatch(getConcernAction(props.match.params.id, 20, 0))
  }, [dispatch, props])
  const { userInfo, FollowsList } = useSelector(
    (state) => ({
      userInfo: state.getIn(['userHome', 'userInfo']),
      FollowsList: state.getIn(['userHome', 'FollowsList'])
    }),
    shallowEqual
  )
  console.log(userInfo)
  console.log(FollowsList, FollowsList?.follow?.length, 'follows')

  return (
    <UserfollowsWrapper>
      <div className="box-user-follows wrap-v2">
        {objectChange(userInfo) && (
          <UserInfo userInfo={userInfo} id={props.match.params.id} />
        )}
        <div className="text-follows">
          关注({userInfo?.profile?.follows ?? 0})
        </div>
        <div className="box-follows">
          {objectChange(FollowsList) && FollowsList.code === 200 ? (
            <>
              <FollowsCover follows={FollowsList} />
              <Pagination
                current={1}
                hideOnSinglePage
                pageSize={20}
                showSizeChanger={false}
                total={userInfo?.profile?.follows}
              />
            </>
          ) : (
            '主人关闭了权限'
          )}
        </div>
      </div>
    </UserfollowsWrapper>
  )
})

UserFollows.propTypes = {}

export default UserFollows
