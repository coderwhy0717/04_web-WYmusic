import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { InformWrapper } from './style'
import LoadingAnimation from '../../../../components/loading'
import { useState } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { chechCookieAction } from '../../../discover/other-pages/store/loginAction'
import { useHistory } from 'react-router-dom'
import { objectChange } from '../../../../utils/format-utils'
import InformItem from './cpn/inform-item'
const MsgInform = memo((props) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()
  const { msgInform } = useSelector(
    (state) => ({
      msgInform: state.getIn(['otherPages', 'msgInform'])
    }),
    shallowEqual
  )
  useEffect(() => {
    // 网络请求数据 chechCookieAction 4
    dispatch(chechCookieAction(4)).then((res) => {
      setLoading(false)
      if (res === 200) return
      // console.log(res, 'res')
      // 失败 跳转登录页面
      history.push(res)
    })
  }, [dispatch, history])
  return (
    <InformWrapper>
      {loading ? (
        <LoadingAnimation />
      ) : (
        objectChange(msgInform?.notices) &&
        msgInform?.notices.map((item) => {
          return <InformItem key={item.id} itemData={item} />
        })
      )}
    </InformWrapper>
  )
})

MsgInform.propTypes = {}

export default MsgInform
